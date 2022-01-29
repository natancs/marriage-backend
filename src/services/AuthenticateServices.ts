import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface IAuthenticate {
  name: string,
  password: string,
};

class AuthenticateService {
  async handle({ name, password }: IAuthenticate) {
    const admin = await prisma.user.findFirst({
      where: {
        name
      }
    });

    if (!admin) {
      return { error: "User not fould!" };
    };

    if (!await bcrypt.compare(password, admin.password)) {
      return { error: "Invalid password" }
    };

    const getAdmin = {
      id: admin.id,
      name: admin.name,
      is_admin: admin.is_admin
    }

    return getAdmin;
  }
};

export { AuthenticateService };
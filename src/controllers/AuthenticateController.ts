// --resolveJsonModule

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AuthenticateController {
  async execute(request: Request, response: Response) {
    const { name, password } = request.body;

    const admin = await prisma.user.findFirst({
      where: {
        name
      }
    });

    if (!admin) {
      return response.json({ error: "User not fould!" }).status(400);
    };

    if (!await bcrypt.compare(password, admin.password)) {
      return response.json({ error: "Invalid password" }).status(400);
    };

    const userAdmin = {
      id: admin.id,
      name: admin.name,
      is_admin: admin.is_admin
    }

    const token = jwt.sign(
      {
        id: admin.id
      },
      authConfig.secret,
      { expiresIn: 86400 }
    );

    return response.json({ userAdmin, token });
  }
};

export { AuthenticateController };
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class RemoveItemService {
  async execute(id: number) {

    await prisma.item.delete({
      where: {
        id
      }
    })
  }
};

export { RemoveItemService };
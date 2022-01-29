import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ListItemService {
  async show() {
    const items = await prisma.item.findMany();

    return items;
  }
};

export { ListItemService };
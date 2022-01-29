import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IUpdateItem {
  id: number,
  checked: boolean
}

class UpdateItemService {
  async update({ id, checked }: IUpdateItem) {
    const itemExist = await prisma.item.findUnique({ where: { id } });

    if (!itemExist) {
      return { error: "Item not exists!" }
    };

    const item = await prisma.item.update({
      where: {
        id
      },
      data: {
        checked
      }
    });

    return item;
  }
};

export { UpdateItemService };
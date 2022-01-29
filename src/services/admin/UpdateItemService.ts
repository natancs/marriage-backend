import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IUpdateItem {
  id: number,
  name: string,
  store: string,
  value: number,
  checked: boolean
}

class UpdateItemService {
  async update({ id, name, store, value, checked }: IUpdateItem) {
    const itemExist = await prisma.item.findUnique({ where: { id } });

    if (!itemExist) {
      return { error: "Item not exists!" }
    };

    const item = await prisma.item.update({
      where: {
        id
      },
      data: {
        name,
        store,
        value,
        checked
      }
    });

    return item;
  }
};

export { UpdateItemService };
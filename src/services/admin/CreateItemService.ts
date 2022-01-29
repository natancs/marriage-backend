import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Items {
  name: string,
  store: string,
  value: number,
  checked?: boolean
}

class CreateItemService {
  async create({ name, store, value, checked }: Items) {
    const newItem = await prisma.item.create({
      data: {
        name,
        store,
        value,
        checked
      }
    });

    return newItem;
  }
};

export { CreateItemService };
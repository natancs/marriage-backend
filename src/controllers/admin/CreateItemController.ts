import { Request, Response } from "express";
import { CreateItemService } from "../../services/admin/CreateItemService";


class CreateItemController {
  async execute(request: Request, response: Response) {
    const { name, store, value, checked } = request.body;
    const itemService = new CreateItemService();

    const item = await itemService.create({ name, store, value, checked });



    return response.status(200).json(item);
  }
};

export { CreateItemController };
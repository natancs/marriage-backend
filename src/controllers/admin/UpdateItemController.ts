import { Request, Response } from "express";
import { UpdateItemService } from "../../services/admin/UpdateItemService";

class UpdateItemController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;
    const { name, store, value, checked } = request.body;
    const updateService = new UpdateItemService();

    const _id = parseInt(id);

    const item = await updateService.update({
      id: _id,
      name,
      store,
      value,
      checked
    })

    return response.status(201).json(item);
  }
};

export { UpdateItemController };
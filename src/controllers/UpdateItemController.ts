import { Request, Response } from "express";
import { UpdateItemService } from "../services/UpdateItemService";

class UpdateItemController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;
    const { checked } = request.body;
    const updateService = new UpdateItemService();

    const _id = parseInt(id);

    const item = await updateService.update({
      id: _id,
      checked
    })

    return response.status(201).json(item);
  }
};

export { UpdateItemController };
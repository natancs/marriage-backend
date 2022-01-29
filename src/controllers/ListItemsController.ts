import { Request, Response } from "express";
import { ListItemService } from "../services/ListItemsServices";

class ListItemsController {
  async execute(request: Request, response: Response) {
    const itemService = new ListItemService();
    const items = await itemService.show();

    return response.json(items);
  }
};

export { ListItemsController };
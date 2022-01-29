import { Request, Response } from "express";
import { RemoveItemService } from "../../services/admin/RemoveItemService";

class RemoveItemController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;
    const removeService = new RemoveItemService();

    try {
      await removeService.execute(parseInt(id))

      return response.send();
    } catch (err) {
      return response.status(400).json({ error: "Item not fould" })
    }

  }
};

export { RemoveItemController };
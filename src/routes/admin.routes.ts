import { Router } from "express";
import { CreateItemController } from "../controllers/admin/CreateItemController";

import { RemoveItemController } from "../controllers/admin/RemoveItemController";
import { UpdateItemController } from "../controllers/admin/UpdateItemController";
import { authMiddlewere } from "../middleware/Auth";

const routes = Router();

routes.use(authMiddlewere)

routes.post("/items", new CreateItemController().execute);
routes.delete("/item/:id", new RemoveItemController().execute);
routes.put("/item/:id", new UpdateItemController().execute);


export { routes }
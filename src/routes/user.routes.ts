import { Router } from "express";
import { AuthenticateController } from "../controllers/AuthenticateController";
import { ListItemsController } from "../controllers/ListItemsController";
import { UpdateItemController } from "../controllers/UpdateItemController";

const routes = Router();

routes.get("/items", new ListItemsController().execute);
routes.put("/item/:id", new UpdateItemController().execute);


routes.post("/authenticate", new AuthenticateController().execute);

export { routes };
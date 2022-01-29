import express from "express";
import { routes as routesAdmin } from "./routes/admin.routes";
import { routes as routesUser } from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use("/admin", routesAdmin);
app.use(routesUser);

app.listen(3333, () => console.log("Server is running!"));
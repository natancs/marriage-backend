import "dotenv";
import express from "express";
import { routes as routesAdmin } from "./routes/admin.routes";
import { routes as routesUser } from "./routes/user.routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/admin", routesAdmin);
app.use(routesUser);

app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));
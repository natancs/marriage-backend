"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
const express_1 = __importDefault(require("express"));
const admin_routes_1 = require("./routes/admin.routes");
const user_routes_1 = require("./routes/user.routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/admin", admin_routes_1.routes);
app.use(user_routes_1.routes);
app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));

"use strict";
// --resolveJsonModule
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_json_1 = __importDefault(require("../config/auth.json"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AuthenticateController {
    execute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, password } = request.body;
            const admin = yield prisma.user.findFirst({
                where: {
                    name
                }
            });
            if (!admin) {
                return response.json({ error: "User not fould!" }).status(400);
            }
            ;
            if (!(yield bcrypt_1.default.compare(password, admin.password))) {
                return response.json({ error: "Invalid password" }).status(400);
            }
            ;
            const userAdmin = {
                id: admin.id,
                name: admin.name,
                is_admin: admin.is_admin
            };
            const token = jsonwebtoken_1.default.sign({
                id: admin.id
            }, auth_json_1.default.secret, { expiresIn: 86400 });
            return response.json({ userAdmin, token });
        });
    }
}
exports.AuthenticateController = AuthenticateController;
;

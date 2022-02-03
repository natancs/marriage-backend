"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddlewere = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_json_1 = __importDefault(require("../config/auth.json"));
function authMiddlewere(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({ error: "No token provid" });
    }
    const parts = authHeader.split(" ");
    if (!(parts.length == 2)) {
        return response.status(401).json({ error: "Token error" });
    }
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return response.status(401).json({ error: "Token malformatted" });
    }
    jsonwebtoken_1.default.verify(token, auth_json_1.default.secret, (error, decoded) => {
        if (error) {
            return response.status(401).json({ error: "Token invalid" });
        }
        request.userId = decoded.id;
        return next();
    });
}
exports.authMiddlewere = authMiddlewere;

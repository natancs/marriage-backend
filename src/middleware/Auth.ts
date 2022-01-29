import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.json";

export function authMiddlewere(request: Request, response: Response, next: NextFunction) {
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

  jwt.verify(token, authConfig.secret, (error, decoded) => {
    if (error) {
      return response.status(401).json({ error: "Token invalid" });
    }

    request.userId = decoded.id;

    return next();
  })
}
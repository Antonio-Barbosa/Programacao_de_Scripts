import { Router, Request, Response } from "express";
import matematica from './matematica';
import data from "./data"
import { Login } from "../controllers"
import { authorization } from "../middlewares";

const routes = Router()

routes.post("/login", Login.logar);
routes.use("/date", data);
routes.use("/math", authorization, matematica);

routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;

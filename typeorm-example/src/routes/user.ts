import { Router } from "express";
import {UserController} from "../controllers";
const routes = Router();

routes.post('/creat', UserController.create);


export default routes;
import { Router } from "express";
import multer from "multer";
import CategoryController from "./app/controllers/CategoryController.js";
import OrderController from "./app/controllers/OrderController.js";
import ProductController from "./app/controllers/ProductController.js";
import SessionController from "./app/controllers/SessionController.js";
import UserController from "./app/controllers/UserController.js";

import multerConfig from "./config/multer.js";

const routes = new Router();
const upload = multer(multerConfig);

// .store para POST || .index para GET || .update para PUT

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);
import authMiddleware from "./app/middlewares/auth.js";

routes.use(authMiddleware); // passando o authMiddleware para todas as rotas que tiver abaixo!

routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);
routes.put("/products/:id", upload.single("file"), ProductController.update);

routes.post("/categories", upload.single("file"), CategoryController.store);
routes.get("/categories", CategoryController.index);
routes.put("/categories/:id", upload.single("file"), CategoryController.update);

routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", OrderController.update); // após o / devo por :id pois será filtrado pelo id

export default routes;

// recebemos request -> middleware (criar barreiras de autenticação) -> vamos para o controller -> acessamos a modelo -> vamos para o database -> responde = damos a resposta ao usuário

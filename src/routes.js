import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.js';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import authMiddleware from './app/middlewares/auth.js';
import CategoryController from './app/controllers/CategoryController.js';
import OrderController from './app/controllers/OrderController.js';


const routes = new Router();
const upload = multer(multerConfig);

// .store para POST || .index para GET || update para PUT

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware); // passando o authMiddleware para todas as rotas que tiver abaixo!

routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', upload.single('file'), ProductController.update);


routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update); // após o / devo por :id pois será filtrado pelo id


export default routes 


// recebemos request -> middleware (criar barreiras de autenticação) -> vamos para o controller -> acessamos a modelo -> vamos para o database -> responde = damos a resposta ao usuário

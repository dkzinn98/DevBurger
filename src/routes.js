import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.js';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import authMiddleware from './middlewares/auth.js';
import CategoryController from './app/controllers/CategoryController.js';


const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware); // passando o authMiddleware para todas as rotas que tiver abaixo!

routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);


export default routes 


// recebemos request -> middleware (criar barreiras de autenticação) -> vamos para o controller -> acessamos a modelo -> vamos para o database -> responde = damos a resposta ao usuário

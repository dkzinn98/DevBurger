
import express from 'express'
import routes from './routes.js'
import './database'; // não dei um nome pq não irei utilizar aqui dentro deste código, esse import é apenas para estanciar a class database e fazer a conexão e config necessária

class App {
    constructor() {
        this.app = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }


    routes() {
        this.app.use(routes);
    }
}

export default new App().app
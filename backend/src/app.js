
import express from 'express'
import { resolve } from 'node:path';
import cors from 'cors'

import routes from './routes.js'

import './database/index.js'; // não dei um nome pq não irei utilizar aqui dentro deste código, esse import é apenas para estanciar a class database e fazer a conexão e config necessária

class App {
    constructor() {
        this.app = express();

        this.app.use(cors());
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')),
    );

    this.app.use(express.json());
        this.app.use('/category-file', express.static(resolve(__dirname, '..', 'uploads')),
    );
    
    }


    routes() {
        this.app.use(routes);
    }
}

export default new App().app
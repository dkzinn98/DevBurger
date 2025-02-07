import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/models/User.js';

const routes = new Router()

routes.get('/', async (request, response) => {
    const user = await User.create({
        id: v4(),
        name: 'Deryk2',
        email: 'deryk2@email.com',
        password_hash: '@dmin!Dk'
    });

    return response.status(201).json(user);
})

export default routes
import mongoose from "mongoose";
import * as Yup from 'yup';
import Product from '../models/Product.js'
import Category from '../models/Category.js'
import Order from '../../../schemas/Order.js'
import User from '../models/User.js'



class OrderController {
    async store(req, res) {
        const schema = Yup.object({
            products: Yup.array().required().of(
                Yup.object({
                    id: Yup.number().required(),
                    quantity: Yup.number().required()
                })
            ),
        });


        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (err) {
            return res.status(400).json({ error: err.errors });
        }


        const { products } = req.body;

        const productsIds = products.map((product) => product.id);

        const findProducts = await Product.findAll({
            where: {
                id: productsIds
            },

            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['name']
                }
            ]
        });

        const formattedProducts = findProducts.map(product => {
            const productIndex = products.findIndex((item) => item.id === product.id);
            
            const newProduct = {
                id: String(product.id),
                name: product.name,
                category: product.category ? product.category.name : 'Sem categoria',
                price: product.price,
                url: product.url,
                quantity: products[productIndex].quantity
            };

            return newProduct;
        })

        const order = {

            user: {
                id: req.userId,
                name: req.userName
            },
            products: formattedProducts,
            status: 'Pedido realizado!'
        };

        const createdOrder = await Order.create(order);

        return res.status(201).json(createdOrder);
    }

    async index(req, res) {
        const orders = await Order.find();

        return res.json(orders);
    }

    async update(req, res) {
        const schema = Yup.object({
            status: Yup.string().required()
        });


        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (err) {
            return res.status(400).json({ error: err.errors });
        }


        const { admin: isAdmin } = await User.findByPk(req.userId);

        if (!isAdmin) {
            return res.status(401).json();
        }


        const { id } = req.params;
        const { status } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ error: 'ID inválido!' });
        } // aqui eu impeço que o código quebre caso busque um ID inexistente!

        await Order.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { status });

        return res.json({ message: 'Status updated sucessfully' });

    }
    
}

export default new OrderController();

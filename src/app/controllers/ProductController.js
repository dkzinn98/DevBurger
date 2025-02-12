import Product from '../models/Product.js';
import * as Yup from 'yup';

class ProductController {
    async store(req, res) {
        const schema = Yup.object({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category: Yup.string().required()
        });

        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (err) {
            return res.status(400).json({ error: err.errors });
        }

        const { filename: path } = req.file;
        const { name, price, category } = req.body;

        const product = await Product.create({
            name,
            price,
            category,
            path
        });

        return res.status(201).json({ message: 'Produto criado com sucesso', product });
    }

    async index(req, res) {  // O método index deve ficar de FORA do método store
        const products = await Product.findAll();
        return res.json(products);
    }
}

export default new ProductController();

import Product from '../models/Product.js';
import * as Yup from 'yup';
import Category from '../models/Category.js'

class ProductController {
    async store(req, res) {
        const schema = Yup.object({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category_id: Yup.number().required()
        });

        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (err) {
            return res.status(400).json({ error: err.errors });
        }

        const { filename: path } = req.file;
        const { name, price, category_id } = req.body;

        const product = await Product.create({
            name,
            price,
            category_id,
            path
        });

        return res.status(201).json({ message: 'Produto criado com sucesso', product });
    }

    async index(req, res) {  // O método index deve ficar de FORA do método store
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['id', 'name']
                }
            ]
        });
        return res.json(products);
    }
}

export default new ProductController();

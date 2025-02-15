import Category from '../models/Category.js';
import * as Yup from 'yup';
import User from '../models/User.js'

class CategoryController {
    async store(req, res) {
        const schema = Yup.object({
            name: Yup.string().required()
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

        const { name } = req.body;

        const categoryExists = await Category.findOne({
            where: {
                name
            }
        });

        if (categoryExists) {
            return res.status(400).json({ error: 'Category already exists' })
        }

        const { id } = await Category.create({
            name
        });

        return res.status(201).json({ id, name });
    }

    async index(req, res) {  // O método index deve ficar de FORA do método store
        const categories = await Category.findAll();
        return res.json(categories);
    }
}

export default new CategoryController();

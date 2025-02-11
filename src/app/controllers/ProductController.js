import * as Yup from 'yup';

class ProductController {
    async store(req, res) {
        const schema = Yup.object({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category: Yup.string().required()
        });

        try {
            schema.validateSync(req.body, { abortEarly: false }); // não precisa utilizar o await antes pq o método já é asyncrono
        } catch (err) {
            return res.status(400).json({ error: err.errors }); // retorna o erro 
        }

        return res.status(201).json({ message: 'ok' });
    }
}

export default new ProductController();

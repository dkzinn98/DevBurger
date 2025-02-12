import * as Yup from 'yup';
import User from '../models/User';
import  jwt from 'jsonwebtoken'
import authConfig from '../../config/auth.js'

class SessionController {
    async store(req, res) { // req = request | res = response
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
        });

        const isValid = await schema.isValid(req.body);

        const emailOrPasswordIncorrect = () => {
            res
                .status(401)
                .json({ error: 'Make sure your email or password are correct' })

        }


        if (!isValid) {
        return emailOrPasswordIncorrect();

        }


        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email
            },
        });

        if (!user) { // se o meu usuario n existe, eu retorno o erro abaixo do json
            return emailOrPasswordIncorrect();
        }


        const isSamePassword = await user.checkPassword(password);

        if (!isSamePassword) {
            return emailOrPasswordIncorrect();
        }

        return res.status(201).json({
            id: user.id,
            name: user.name,
            email,
            admin: user.admin,
            token: jwt.sign({ id: user.id }, authConfig.secret , { // gerando token de login do user
                expiresIn: authConfig.expiresIn // a pessoa pode ficar 1 dia inteiro sem precisar realizar log-in novamente | essa config to puxando do auth.js
            })
        });
    }
}




export default new SessionController();
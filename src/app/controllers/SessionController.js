import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
    async store(req, res) { // req = request | res = response
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
        });

        const isValid = await schema.isValid(req.body);
        
        if (!isValid) {
            return res.status(401).json({ error: 'Make a sure your email or password are correct' });
        }
        
        
        const {email, password} = req.body;
        
        const user = await User.findOne({
            where: {
                email
            },
        });

        if (!user) { // se o meu usuario n existe, eu retorno o erro abaixo do json
            return res
                .status(401)
                .json({ error: 'Make sure your email or password are correct'})
        }


        const isSamePassword = await user.comparePassword(password);

        if (!isSamePassword) {
            return res
            .status(401)
            .json({ error: 'Make sure yout email or password are correct' })
        }

        console.log(isSamePassword)

        return res.json({ message: 'session' });
    }
}




export default new SessionController();
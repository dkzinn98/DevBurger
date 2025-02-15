import jwt, { decode } from 'jsonwebtoken'
import authConfig from '../../config/auth.js';


function authMiddleware(req, res, next) { // o next faz a aplicação seguir, ir para o próximo "passo"
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({ error: 'Token not provided' })
    }

    const token = authToken.split(' ').at(1);

    try {
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                throw new Error();
            }

            req.userId = decoded.id;
            req.userName = decoded.name;

        });
    }   catch (err) {
        return res.status(401).json({ error: 'Token is invalid' })
    }
    
    return next();
}


export default authMiddleware;
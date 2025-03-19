import jwt from "jsonwebtoken";
import authConfig from "../../config/auth.js";

export default function authMiddleware(req, res, next) {
	// Obtém o token do cabeçalho Authorization
	const authToken = req.headers.authorization;

	// ✅ Verificação adicional do formato do Header Authorization
	if (!authToken || !authToken.startsWith("Bearer ")) {
		return res
			.status(401)
			.json({ error: "Token not provided or in wrong format" });
	}

	// Extrai o token do cabeçalho
	const token = authToken.split(" ")[1];

	// ✅ Apenas para modo de desenvolvimento
	if (process.env.NODE_ENV === "development") {
		console.log(`🟢 Authorization Header: ${authToken}`);
		console.log(`🟢 Token: ${token}`);
	}

	// ✅ Verifica o token JWT de forma assíncrona usando callback
	jwt.verify(token, authConfig.secret, (err, decoded) => {
		if (err) {
			if (err.name === "TokenExpiredError") {
				return res.status(401).json({ error: "Token expired" });
			}
			if (err.name === "JsonWebTokenError") {
				return res.status(401).json({ error: "Invalid token" });
			}
			return res.status(401).json({ error: "Authentication error" });
		}

		// ✅ Define as informações do usuário na requisição
		req.userId = decoded.id;
		req.userName = decoded.name;

		// ✅ Apenas para modo de desenvolvimento
		if (process.env.NODE_ENV === "development") {
			console.log(`✅ Token válido para o usuário: ${decoded.name}`);
		}

		// ✅ Passa para o próximo middleware
		return next();
	});
}

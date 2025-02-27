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

	// ✅ Logs para depuração
	console.log("Authorization Header:", authToken);
	console.log("Token:", token);

	// Verifica o token JWT de forma assíncrona usando callback
	jwt.verify(token, authConfig.secret, (err, decoded) => {
		// ✅ Tratamento específico para token expirado
		if (err) {
			if (err.name === "TokenExpiredError") {
				return res.status(401).json({ error: "Token expired" });
			}
			return res.status(401).json({ error: "Token is invalid" });
		}

		// ✅ Logs para depuração
		console.log("Decoded Token:", decoded);

		// Define as informações do usuário na requisição
		req.userId = decoded.id;
		req.userName = decoded.name;

		// Chama o próximo middleware apenas após definir req.userId e req.userName
		return next();
	});
}

import {
	// ❌ Remover 'Children' pois não está sendo utilizado.
	createContext,
	useContext,
	useState,
} from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState(() => {
		// ✅ Carregar os dados do usuário do localStorage ao iniciar
		const storedUser = localStorage.getItem("devburger:userData");
		return storedUser ? JSON.parse(storedUser) : {};
	});

	const putUserData = (userInfo) => {
		setUserInfo(userInfo);

		// ✅ Certifique-se de salvar os dados corretamente no localStorage
		localStorage.setItem("devburger:userData", JSON.stringify(userInfo));
	};

	// ✅ Adicionando logout que limpa os dados do usuário
	const logout = () => {
		setUserInfo({});
		localStorage.removeItem("devburger:userData");
	};

	return (
		// ❌ Adicionar 'putUserData' e 'logout' no provider para permitir atualização do estado em outros componentes.
		<UserContext.Provider value={{ userInfo, putUserData, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		// ❌ Melhorar a mensagem de erro para indicar que o hook deve ser usado dentro do UserProvider.
		throw new Error("useUser must be used within a UserProvider");
	}

	return context;
};

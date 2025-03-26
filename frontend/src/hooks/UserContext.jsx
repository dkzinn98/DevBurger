import { createContext, useContext, useState } from "react";

// Criação do contexto
const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState(() => {
		// Carregar dados do usuário do localStorage ao iniciar
		const storedUser = localStorage.getItem("devburger:userData");
		return storedUser ? JSON.parse(storedUser) : {};
	});

	const putUserData = (userInfo) => {
		setUserInfo(userInfo);
		// Salvar os dados corretamente no localStorage
		localStorage.setItem("devburger:userData", JSON.stringify(userInfo));
	};

	// Função de logout que limpa os dados do usuário
	const logout = () => {
		setUserInfo({});
		localStorage.removeItem("devburger:userData");
	};

	return (
		<UserContext.Provider value={{ userInfo, putUserData, logout }}>
			{children}
		</UserContext.Provider>
	);
};

// Hook personalizado para consumir o contexto do usuário
export const useUser = () => {
	const context = useContext(UserContext);

	if (!context) {
		// Melhorando a mensagem de erro
		throw new Error(
			"useUser must be used within a UserProvider. Please wrap your component with UserProvider.",
		);
	}

	return context;
};

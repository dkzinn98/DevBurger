import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../../hooks/UserContext";
import {
	Container,
	Content,
	HeaderLink,
	LinkContainer,
	Logout,
	Navigation,
	Options,
	Profile,
} from "./styles";

import { ShoppingCart, UserCircle } from "@phosphor-icons/react/dist/ssr";

export function Header() {
	const navigate = useNavigate();
	const { logout, userInfo } = useUser();

	const { pathname } = useResolvedPath();

	function logoutUser() {
		logout();
		navigate("/login");
	}
	return (
		<Container>
			<Content>
				<Navigation>
					<div>
						<HeaderLink to="/" $isActive={pathname === "/"}>
							Home
						</HeaderLink>
						<hr></hr>
						<HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
							Cardápio
						</HeaderLink>
					</div>
				</Navigation>
				<Options>
					<Profile>
						<UserCircle color="#fff" size={34} />
						<div>
							<p>
								Olá, <span>{userInfo.name}</span>
							</p>
							<Logout onClick={logoutUser}>Sair</Logout>
						</div>
					</Profile>
					<LinkContainer>
						<ShoppingCart color="#fff" size={34} />
						<HeaderLink to="/carrinho">Carrinho</HeaderLink>
					</LinkContainer>
				</Options>
			</Content>
		</Container>
	);
}

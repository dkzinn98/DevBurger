import { createBrowserRouter } from "react-router-dom";

import { Cart } from "../containers/Cart";
import { Home } from "../containers/Home";
import { Login } from "../containers/Login";
import { Menu } from "../containers/Menu";
import { Register } from "../containers/Register";
import { Footer } from "../containers/components/Footer";
import { Header } from "../containers/components/Header";

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<Home />
				<Footer />
			</>
		),
	},

	{
		path: "/login",
		element: <Login />,
	},

	{
		path: "/cadastro",
		element: <Register />,
	},

	{
		path: "/cardapio",
		element: (
			<>
				<Header />
				<Menu />,
			</>
		),
	},

	{
		path: "/carrinho",
		element: <Cart />,
	},
]);

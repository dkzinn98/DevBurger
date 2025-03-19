import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../components/CardProduct";
import {
	Banner,
	CategoryButton,
	CategoryMenu,
	Container,
	ProductsContainer,
} from "./styles";

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const navigate = useNavigate();

	const { search } = useLocation(); // categoria=1

	const queryParams = new URLSearchParams(search);

	const [activeCategory, setActiveCategory] = useState(() => {
		const categoryId = +queryParams.get("categoria");

		if (categoryId) {
			return categoryId;
		}

		return 0;
	});

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get("/categories");

			const newCategories = [{ id: 0, name: "Todas" }, ...data];

			setCategories(newCategories);
		}

		async function loadProducts() {
			const { data } = await api.get("/products");
			const newProducts = data.map((product) => ({
				currencyValue: formatPrice(product.price),
				...product,
			}));

			setProducts(newProducts);
		}

		loadCategories();
		loadProducts();
	}, []);

	useEffect(() => {
		if (activeCategory === 0) {
			setFilteredProducts(products); // Mostra todos os produtos se a categoria ativa for 0
		} else {
			const newFilteredProducts = products.filter(
				(product) => product.category_id === activeCategory,
			);

			setFilteredProducts(newFilteredProducts); // Atualiza o estado corretamente
		}
	}, [activeCategory, products]); // Adicionei as dependências corretas

	return (
		<Container>
			<Banner>
				<h1>
					O MELHOR
					<br />
					HAMBURGUER
					<br />
					ESTA AQUI
				</h1>
				<span>este cardápio está irresistível!</span>
			</Banner>
			<CategoryMenu>
				{categories.map((category) => (
					<CategoryButton
						key={category.id}
						onClick={() => {
							navigate(
								{
									pathname: "/cardapio",
									search: `?categoria=${category.id}`,
								},
								{
									replace: true,
								},
							);
							setActiveCategory(category.id);
						}}
					>
						{category.name}
					</CategoryButton>
				))}
			</CategoryMenu>

			<ProductsContainer>
				{filteredProducts.map((product) => (
					<CardProduct product={product} key={product.id} />
				))}
			</ProductsContainer>
		</Container>
	);
}

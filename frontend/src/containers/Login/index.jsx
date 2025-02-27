import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../services/api.js";

import Logo from "../../assets/logo-devburger-login.svg";

import {
	Container,
	Form,
	InputContainer,
	LeftContainer,
	Link,
	RightContainer,
	Title,
} from "./styles.js";

import { Button } from "../components/Button";

export function Login() {
	const navigate = useNavigate();
	const schema = yup
		.object({
			email: yup
				.string()
				.email("Digite um e-mail válido!")
				.required("O e-mail é obrigatório!"),
			password: yup
				.string()
				.min(6, "A senha deve ter pelo menos 6 caracteres")
				.required("Digite uma senha!"),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);

	const onSubmit = async (data) => {
		try {
			const {
				data: { token },
			} = await toast.promise(
				api.post("/sessions", {
					email: data.email,
					password: data.password,
				}),
				{
					pending: "Verificando seus dados",
					success: {
						render() {
							setTimeout(() => {
								navigate("/");
							}, 2000);
							return "Seja Bem-Vindo(a) 👌";
						},
					},
					error: "Email ou senha incorretos 🤯",
				},
			);

			localStorage.setItem("token", token);
		} catch (error) {
			// Caso ocorra um erro inesperado, ele será tratado aqui abaixo
			console.error("Erro ao fazer login:", error);

			// Notificação para erros inesperados abaixo
			toast.error("Ocorreu um erro inesperado. Tente novamente mais tarde.");
		}
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devburger" />
			</LeftContainer>
			<RightContainer>
				<Title>
					Olá, seja bem-vindo ao <span>Dev Burguer</span>!
					<br />
					Acesse com seu <span>Login e senha</span>.
				</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Email</label>
						<input
							type="email"
							{...register("email")}
							placeholder="Digite seu email"
						/>
						<p>{errors?.email?.message}</p>
					</InputContainer>

					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Senha</label>
						<input
							type="password"
							{...register("password")}
							placeholder="Digite sua senha"
						/>
						<p>{errors?.password?.message}</p>
					</InputContainer>
					<Button type="submit">Entrar</Button>
				</Form>
				<p>
					Não possui conta? <Link to="/cadastro">Clique aqui!</Link>
				</p>
			</RightContainer>
		</Container>
	);
}

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from 'react-toastify'
import { api } from '../../services/api.js'

import Logo from '../../assets/logo-devburger-login.svg';

import { 
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title
} from "./styles.js";

import { Button } from '../components/Button/index.jsx';

export function Register(){
    
    const schema = yup.object({
        name: yup
        .string()
        .required('O nome é obrigatório!'),
        email: yup
        .string().email('Digite um e-mail válido!')
        .required('O e-mail é obrigatório!'),
        password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha!'),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais!')
        .required('Confirme sua senha'),
      })
      .required();


      const { register,
        handleSubmit,
        formState:{ errors },
     } = useForm({
        resolver: yupResolver(schema)
      });
      
      console.log(errors);
      
      const onSubmit = async (data) => {

        try {
            const { status } = await api.post('/users')
            api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password
        },
        
        {
            validateStatus: () => true,
        },

        );

        if(status === 200 || status === 201) {
            toast.success('Conta criada com sucesso')
        } else if(status === 409){
            toast.error('Email já cadastrado! Faça o login para continuar!')
        } else {
            throw new Error();

        }

        } catch (error) {
            toast.error('Falha no sistema, tente novamente! 😭')
        }
      };
        

      

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='logo-devburger' />
            </LeftContainer>
            <RightContainer>
                <Title>Criar conta</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    
                <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")}
                        placeholder="Digite seu nome" />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>
                    
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")}
                        placeholder="Digite seu email" />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")}
                        placeholder="Digite sua senha" />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" {...register("confirmPassword")}
                        placeholder="Digite sua senha" />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Cadastrar</Button>
                </Form>
                <p>Já possui conta? <a href='./login'>Clique aqui!</a>
                </p>
            </RightContainer>
        </Container>
    )};

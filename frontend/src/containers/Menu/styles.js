import { Link } from "react-router-dom";
import styled from "styled-components";
import BannerHamburguer from "../../assets/banner-hamburguer.svg";
import Background from "../../assets/right-background-login.svg";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

    position: relative;
    background: url(${Background});
    background-size: 850px; /* Tamanho do padrão de repetição */
    background-position: top left; /* Posição inicial do padrão */
    background-repeat: repeat; /* Para repetir o padrão */

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(240, 240, 240, 0.7); /* Deixa o fundo levemente visível */
        z-index: 0;
    }
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerHamburguer}');
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;
    
    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #fff;
        position: absolute;
        text-align: center;
        right: 20%;
        top: 30%;
    }

    span {
        display: block;
        color: #fff;
        font-size: 20px;
        margin: 250px 0 0 620px;
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 40px;`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: #9758A6;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
    line-height: 20px;
    border-bottom: 3px solid transparent; /* Borda inicial invisível */
    opacity: 0.99;
    transition: color 0.3s ease, border-color 0.3s ease; /* Transição suave */

    &:hover {
        color: #8EBC61;
        border-bottom: 3px solid #9758A6; /* Borda aparece ao passar o mouse */
        opacity: 0.99;
    }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto;
`;

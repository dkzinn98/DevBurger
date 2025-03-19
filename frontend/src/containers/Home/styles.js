import styled from "styled-components";

import BannerHome from "../../assets/banner-home.svg";
import Background from "../../assets/right-background-login.svg";

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 400px;

    h1{
        font-family: "Road Rage", serif;
        font-size: 80px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`;

export const Container = styled.section`
    position: relative;
    background: url(${Background});
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    min-height: 100vh;
    width: 100%;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(240, 240, 240, 0.4); /* Cinza mais claro com transparência */
        z-index: 0;
    }
`;

export const Content = styled.div`
    /* padding-bottom: 70px; */
`;

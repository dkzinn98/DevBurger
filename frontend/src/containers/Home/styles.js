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
    background: 
    url(${Background}),
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    height: 300px;

`;

export const Content = styled.div`

`;

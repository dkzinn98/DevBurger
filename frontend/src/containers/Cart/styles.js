import styled from "styled-components";
import Background from "../../assets/right-background-login.svg";
import Texture from "../../assets/texture.svg";

export const Container = styled.div`
    width: 100%;
    background: url(${Background});
    min-height: 100vh;
    background-size: cover;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(240, 240, 240, 0.4);
        z-index: 0;
    }

`;

export const Banner = styled.div`
    background: url('${Texture}');
    background-color: #1f1f1f;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    height: 180px;

    img {
        height: 160px;
    }
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #61a120;
    text-align: center;
    position: relative;

    &::after {
        position: absolute;
        left: calc(50% - 28px);
        content: '';
        width: 56px;
        height: 4px;
        background-color: #61a120;
        bottom: 0;
    }
`;
export const Content = styled.div`
    display: grid;
    grid-template-columns: 1f 20%;
    width: 100%;
    max-width: 1280px;
    gap: 20px;

    padding: 40px;
    margin: 0 auto;
`;

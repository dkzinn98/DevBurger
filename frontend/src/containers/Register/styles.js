import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";
import LeftBackgroundLogin from "../../assets/left-background-login.svg";
import RightBackgroundLogin from "../../assets/right-background-login.svg";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;

    a {
        color: green;
    }

    label {
        white-space: nowrap;
    }
`;

export const LeftContainer = styled.div`
    background: url('${LeftBackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 65%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${RightBackgroundLogin}');
    background-color: #1e1e1e ;
    background-size: cover;


    p {
        color: white;
        font-size: 18px;
        font-weight: 800;
        font-family: "Poppins", serif;

        a{
            text-decoration: underline;
        }
    }
    
`;

export const Title = styled.h2`
    font-family: "Road Rage", serif;
    font-size: 40px;
    color: white;
    text-align: center;

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    width: 100%;
    max-width: 40px;
    margin-right: 345px;
    color: white;

`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;

    input {
        width: 350px;
        height: 52px;
        border: none;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 17px;
        font-weight: 600;
        font-family: "Poppins", serif;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        white-space: nowrap;
        margin-top: 2px;
        height: 10px;
    }

`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: white;
`;

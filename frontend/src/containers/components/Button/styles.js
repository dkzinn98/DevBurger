import styled from "styled-components";

export const ContainerButton = styled.button`
    width: 350px;
    height: 52px;
    border: 0;
    border-radius: 7px;
    background-color: #9758A6;
    font-size: 30px;
    color: white;
    opacity: 80%;
    transition: transform 0.3s ease-in-out;
    font-family: "Road Rage", serif;


    &:hover {
        transform: translateY(-5px) scale(1.05);
    }

    &:active {
        transform: translateY(3px) scale(1);
    }
`;

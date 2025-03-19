import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    .carousel-item{
        padding-right: 20px;
    }

    align-items: center;
    padding-left: 60px;
    padding-top: 50px; /* Adiciona espaçamento sem mexer no background */
    cursor: grab;

    .react-multiple-carousel__arrow--left {
        left: 7px;
        top: 45px;
    
    }

    .react-multiple-carousel__arrow--right {
        top: 45px;
        right: 62px;
    
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 30px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 55px;
        height: 4px;
        background-color: #9758a6;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin-top: 30px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 90%;
    height: 195px;
`;

export const CategoryButton = styled(Link)`
        color: #ffffff;
        background-color: rgba(0,0,0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 19px;
        margin-top: 130px;
        font-weight: 500;
        text-decoration: none;

        &:hover{
            background-color:rgba(150, 88, 166, 0.77);
        }
`;

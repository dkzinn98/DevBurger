import styled from "styled-components";

export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 80px;
    
    }

    .react-multiple-carousel__arrow--right {
        top: 80px;
    
    }

    /* Esconder a barra de rolagem para todos os navegadores */
    & {
        -ms-overflow-style: none;  /* Para IE e Edge */
        scrollbar-width: none;     /* Para Firefox */
    }
    
    /* Esconder a barra de rolagem para Chrome, Safari e Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    padding-left: 40px;
    padding-bottom: 45px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #61A120;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 70px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 55px;
        height: 4px;
        background-color: #61A120;
        left: 50%;
        transform: translateX(-50%);

    }
`;

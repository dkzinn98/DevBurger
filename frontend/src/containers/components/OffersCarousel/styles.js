import styled from "styled-components";

export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }

    padding-left: 30px;
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

    p{
        color: #ffffff;
        background-color: rgba(0,0,0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 17px;
        font-weight: bold;
        margin-top: 140px;

    }
`;

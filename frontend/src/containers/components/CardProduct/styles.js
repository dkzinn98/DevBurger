import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 7px;
    background-color: #ffffff;
    cursor: grab;
    margin-top: 70px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;    div {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
            font-size: 18px;
            color: #ff8c05;
            line-height: 20px;
            font-weight: 700;
            margin-top: 50px;
            text-overflow: ellipsis; /* Adiciona "..." se o texto for muito longo */
        }

        strong {
            font-size: 22px;
            color: #363636;
            font-weight: 800;
            line-height: 20px;
            margin-top: 10px;
        }

    }
 `;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
    margin-top: 50px;
    
`;

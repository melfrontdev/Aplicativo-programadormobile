import styled from "styled-components/native";

type colorProps = {
    color?: string
}

export const Container = styled.View`
    background: #0f0f0f;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`;

export const Programador = styled.View`
    width: 90%;
    height: 90%;
    background: #383737;
    border-radius: 7px;
    gap: 5px;
`;

export const AreaVisor = styled.View`
    border: 5px solid #888686;
    border-radius: 12px;
    width: 90%;
    height: 35%;
    margin: 25px auto;
`;

export const Visor = styled.View`
    background: #caceb8;
    width: 85%;
    height: 60px;
    margin: 30px auto;
    justify-content: center;
    padding: 0 4px;
`;

export const Caracteres = styled.Text`
    font-size: 30px;
    letter-spacing: 2px;
    justify-content: center;
`;

export const Titulo = styled.Text`
    font-size: 30px;
    letter-spacing: 2px;
    justify-content: center;
    margin: -20px auto -7px;
    color: #fff;
    font-weight: 800;
`

export const AreaButtons = styled.View`
    border: 5px solid #888686;
    border-radius: 12px;
    width: 90%;
    height: 43%;
    margin: 15px auto;
`;

export const RowButtons = styled.View`
    padding: 0 15px;
    margin-top: 15px;
    flex-direction: row;
    justify-content: center;
    gap: 18px;
`;

export const Button = styled.View<colorProps>`
    width: 55px;
    height: 55px;
    background: ${props => props.color ? props.color : "#d6d2d2"};
    align-items: center;
    justify-content: center;
`;

export const TitleButton = styled.Text`
    font-size: 30px;
    font-weight: 600;
`;




import styled from "styled-components/native";

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
`;

export const AreaVisor = styled.View`
    border: 5px solid #888686;
    border-radius: 12px;
    width: 90%;
    height: 35%;
    margin: 25px auto;
`;

export const Visor = styled.View`
    background: #475742;
    width: 85%;
    height: 60px;
    margin: 20px auto;
    justify-content: center;
    padding: 0 7px;
`;

export const Caracteres = styled.Text`
    font-size: 30px;
    letter-spacing: 2px;
`;

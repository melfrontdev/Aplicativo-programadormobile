import { useState } from 'react'
import { StatusBar } from "expo-status-bar"
import { Container, Programador, AreaVisor, Visor, Caracteres, AreaButtons, RowButtons, Button, TitleButton, Titulo } from "./styles"
import { TouchableOpacity } from "react-native"


export default function App() {

    const [mensagem, setMensagem] = useState('');

    const handlePress = (value: string) => {
        setMensagem(`Botão ${value} pressionado!`);
    };

    return (
        <Container>
            <StatusBar animated={true} backgroundColor="#ac66ee" />
            <Programador>
                <AreaVisor>
                    <Visor>
                        <Caracteres>{mensagem}</Caracteres>
                    </Visor>
                </AreaVisor>
                <Titulo>PROGRAMADOR</Titulo>
                <AreaButtons>

                    <RowButtons>
                        <TouchableOpacity onPress={() => handlePress('7')} >
                            <Button color='#fff'>
                                <TitleButton>7</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#fff'>
                                <TitleButton>8</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#fff'>
                                <TitleButton>9</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#646060'>
                                <TitleButton>MF</TitleButton>
                            </Button>
                        </TouchableOpacity>
                    </RowButtons>

                    <RowButtons>
                        <TouchableOpacity>
                            <Button color='#ec9898f9'>
                                <TitleButton>4</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#e9eb9f'>
                                <TitleButton>5</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#a3d898'>
                                <TitleButton >6</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#646060'>
                                <TitleButton style={{ color: '#fceb02' }}>X</TitleButton>
                            </Button>
                        </TouchableOpacity>
                    </RowButtons>

                    <RowButtons>
                        <TouchableOpacity>
                            <Button color='#db1414'>
                                <TitleButton>1</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#e2e61c'>
                                <TitleButton>2</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#2fb307'>
                                <TitleButton>3</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#646060'>
                                <TitleButton>FIM</TitleButton>
                            </Button>
                        </TouchableOpacity>
                    </RowButtons>

                    <RowButtons>
                        <TouchableOpacity>
                            <Button color='#fff'>
                                <TitleButton>0</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#646060'>
                                <TitleButton>AL</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#646060'>
                                <TitleButton>AC</TitleButton>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button color='#646060'>
                                <TitleButton style={{ color: '#fceb02' }}>E</TitleButton>
                            </Button>
                        </TouchableOpacity>
                    </RowButtons>

                </AreaButtons>
            </Programador>
        </Container>
    );
}

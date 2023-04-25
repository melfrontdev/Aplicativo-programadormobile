import { StatusBar } from "expo-status-bar";
import { Container, Programador, AreaVisor, Visor, Caracteres } from "./styles";

export default function App() {
    return (
        <Container>
            <StatusBar animated={true} backgroundColor="#ac66ee" />
            <Programador>
                <AreaVisor>
                    <Visor>
                        <Caracteres>123456</Caracteres>
                    </Visor>
                </AreaVisor>
            </Programador>
        </Container>
    );
}

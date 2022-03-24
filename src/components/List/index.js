import { Container, Li, Ul } from "./styles";

export default function List() {
    return (
        <Container>
            <Ul>
                <Li>
                    <small>COMO ENTRAR</small>
                    <a><b>Não consigo redefinir a senha</b></a>
                </Li>
                <Li>
                    <small>PLANOS DISPONÍVEIS</small>
                    <a><b>Criar ou entrar em um plano Família</b></a>
                </Li>
                <Li>
                    <small>COMO ENTRAR</small>
                    <a><b>Não lembro minhas informações de login</b></a>
                </Li>
                <Li>
                    <small>COMO ENTRAR</small>
                    <a><b>Ajuda para entrar com o Facebook</b></a>
                </Li>
            </Ul>
        </Container>

    )
}
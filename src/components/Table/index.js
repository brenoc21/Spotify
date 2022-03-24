import { Container } from "./styles";

export default function Table() {
    return (
        <Container>
            <table class="table">
                <thead>
                    <th>Ajuda com pagamentos</th>
                    <th>Ajuda com a conta</th>
                    <th>Ajuda com o plano</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Gerenciar pagamentos</td>
                        <td>Como entrar</td>
                        <td>Planos disponíveis</td>
                    </tr>
                    <tr>
                        <td>Formas de pagamento</td>
                        <td>Ajuda com o perfil</td>
                        <td>Preferências do plano</td>
                    </tr>
                    <tr>
                        <td>Ajuda com a cobrança</td>
                        <td>Configurações da conta</td>
                        <td>Premium Família e Kids</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Segurança</td>
                        <td>Premium Duo</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Premium Universitário</td>
                    </tr>
                </tbody>
                <thead>
                    <th>Ajuda com o app</th>
                    <th>Ajuda com dispositivos</th>
                    <th>Privacidade e Dados</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Como começar</td>
                        <td>Alto-falantes</td>
                        <td>Privacidade de reprodução</td>
                    </tr>
                    <tr>
                        <td>Preferências do app</td>
                        <td>Smartwatches</td>
                        <td>Informações de privacidade e dados</td>
                    </tr>
                    <tr>
                        <td>Solução de problemas</td>
                        <td>TVs</td>
                    </tr>
                    <tr>
                        <td>Playlists</td>
                        <td>Videogames</td>
                    </tr>
                    <tr>
                        <td>Recursos</td>
                        <td>Carros</td>
                    </tr>
                    <tr>
                        <td>Recursos de redes sociais</td>
                    </tr>
                    <tr>
                        <td>Assistentes de voz</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
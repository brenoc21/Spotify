import React from "react";
import {HeaderBackground, HeaderItem, ItemsContainer} from './styles'
import Logo from "../Logo/index"
export default function Header(){
    return (
        <HeaderBackground>
                <Logo></Logo>
                <ItemsContainer>
                    <HeaderItem href="https://www.spotify.com/br/premium/">Premium</HeaderItem>
                    <HeaderItem href="https://support.spotify.com/br/">Suporte</HeaderItem>
                    <HeaderItem href="https://www.spotify.com/br/download/linux/">Baixar</HeaderItem>
                    |
                    <HeaderItem href="./signin/index.html">Inscreva-se</HeaderItem>
                    <HeaderItem href="./playlist">Entrar</HeaderItem>
                </ItemsContainer>
        </HeaderBackground>
    )
}
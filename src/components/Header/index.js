import React from "react";
import { HeaderBackground, HeaderItem, ItemsContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/index";
export default function Header() {
  const navigate = useNavigate();
  function handleNav() {
    navigate("/Playlist");
  }
  return (
    <HeaderBackground>
      <Logo></Logo>
      <ItemsContainer>
        <HeaderItem href="https://www.spotify.com/br/premium/">
          Premium
        </HeaderItem>
        <HeaderItem href="https://support.spotify.com/br/">Suporte</HeaderItem>
        <HeaderItem href="https://www.spotify.com/br/download/linux/">
          Baixar
        </HeaderItem>
        |<HeaderItem href="./signin/index.html">Inscreva-se</HeaderItem>
        <HeaderItem onClick={() => handleNav()}>Entrar</HeaderItem>
      </ItemsContainer>
    </HeaderBackground>
  );
}

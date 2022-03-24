import React from "react";
import { HeaderBackground, HeaderItem, ItemsContainer } from "./styles";
import Logo from "../Logo/index";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderBackground>
      <Logo></Logo>
      <ItemsContainer>
        <HeaderItem onClick={() => navigate("/playlist")}>Premium</HeaderItem>
        <HeaderItem onClick={() => navigate("/faq")}>Suporte</HeaderItem>
        <HeaderItem href="https://www.spotify.com/br/download/linux/">
          Baixar
        </HeaderItem>
        |<HeaderItem href="./signin/index.html">Inscreva-se</HeaderItem>
        <HeaderItem onClick={() => navigate("/playlist")}>Entrar</HeaderItem>
      </ItemsContainer>
    </HeaderBackground>
  );
}

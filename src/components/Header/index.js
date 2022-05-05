import React from "react";
import { HeaderBackground, HeaderItem, ItemsContainer } from "./styles";
import Logo from "../Logo/index";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderBackground>
      <Logo path="/"></Logo>
      <ItemsContainer>
        <HeaderItem onClick={() => navigate("/playlist")}>Premium</HeaderItem>
        <HeaderItem onClick={() => navigate("/faq")}>Suporte</HeaderItem>
        <HeaderItem href="https://www.spotify.com/br/download/linux/">
          Baixar
        </HeaderItem>
        |
        <HeaderItem onClick={() => navigate("/signin")}>Inscreva-se</HeaderItem>
        <HeaderItem onClick={() => navigate("/login")}>Entrar</HeaderItem>
      </ItemsContainer>
    </HeaderBackground>
  );
}

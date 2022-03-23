import React from "react";
import { Background } from "./styles";
import Button from "../../components/ButtonHome/index";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Background>
        <Header></Header>
        <div>
          <h1>Escutar muda tudo</h1>
          <p>
            Milhões de músicas e podcasts para explorar. E nem precisa de cartão
            de crédito
          </p>
          <Button text="BAIXE O SPOTIFY FREE" type="1"></Button>
        </div>
      </Background>
      <Footer />
    </>
  );
}

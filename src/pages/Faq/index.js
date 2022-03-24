import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ButtonHome from "../../components/ButtonHome";
import { Background, Container } from "./styles";
import List from "../../components/List";
import Table from "../../components/Table";

export default function Faq() {
  return (
    <>
      <Background>
        <Header />
        <h1>
          Quer uma <b id="pun">camarão</b>zinha?
        </h1>
        <input></input>
        <List />
      </Background>
      <Table />
      <Container>
        <h1>Visite a Comunidade</h1>
        <p>Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs especialistas do mundo todo!</p>
        <a>
          <ButtonHome text="Encontrar respostas" type="1"></ButtonHome>
        </a>
      </Container>
      <Footer />
    </>
  );
}

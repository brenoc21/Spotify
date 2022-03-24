import styled from "styled-components";
import BG from "../../assets/TriangleBG.svg";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BG});
  background-color: var(--secondary-color);
  height: 92vh;
  gap: 2rem;
  min-height: 240px;
  padding: 1rem 0rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    text-align: center;
    width: 50%;
  }
  h1 {
    margin: 0;
    font-size: 9rem;
  }
  #pun {
    color: var(--main-color);
  }
  @media (max-width: 1600px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media (max-width: 1280px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 47vh;
    height: fit-content;
    gap: 2rem;
    min-height: 240px;
    padding: 1rem 0rem;
`;

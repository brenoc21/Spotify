import styled from "styled-components";
import BG from "../../assets/TriangleBG.svg";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BG});
  background-color: var(--secondary-color);
  height: 40rem;
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

    .material-icons-outlined {
      color: var(--dark-color);
    }
  }
  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 9rem;
  }

  .searchbar {
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 35%;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    
    b {
      font-size: 1.5rem;
    }

    input {
      color: var(--dark-color);
      margin-left: 1rem;
      background: transparent;
      font-size: 1rem;
      height: 0.5rem 1.5rem;
      width: 100%;
      border: none;
    }
    
  }

  #pun {
    color: var(--main-color);
  }
  @media (max-width: 1920px) {
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
  width: 100%;
  background-color: var(--light-color);

  div {
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    padding: 5rem 0rem;
    gap: 2rem;
    font-size: 1.5rem;
  }

  h1 {
    margin: 0;
    font-size: 4rem;
    color: var(--dark-color);
  }

  p {
    color: var(--dark-color);
  }

  .button-faq {
    cursor: pointer;
    margin-right: 3rem;
    padding: 1rem 3.5rem;
    color: var(--light-color);
    background-color: var(--main-color);
    border: none;
    border-radius: 20rem;
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    transition-duration: 0.3s;
  }
`;

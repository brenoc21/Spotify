import styled from "styled-components";

export const ButtonPrimary = styled.button`
  border-style: none;
  background-color: var(--main-color);
  color: var(--light-color);
  font-weight: bold;
  border-radius: 20rem;
  width: max-content;
  padding: 1rem;
  transition: 025s;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

export const ButtonSecondary = styled.button`
  border-style: none;
  background-color: var(--secondary-color);
  color: var(--light-color);
  font-weight: bold;
  border-radius: 20rem;
  width: max-content;
  padding: 1rem;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

export const ButtonTerciary = styled.button`
    border-style: none;
    background-color: var(--main-color);
    color: var(--light-color);
    font-weight: bold;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 20rem;
    width: max-content;
    transition: 0.25s;
    cursor: pointer;
    :hover {
        transform: scale(1.05);
    } 
`;

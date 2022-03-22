import styled from "styled-components";

export const HeaderBackground = styled.nav`
  position: absolute;
  top: 0;
  min-width: 100%;
  max-width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  background-color: var(--dark-color);
  align-items: center;
  img {
    max-width: 9rem;
  }
`;
export const ItemsContainer = styled.ul`
  display: flex;
  gap: 1rem;
`;
export const HeaderItem = styled.li`
  color: var(--light-color);
  cursor: pointer;
  transition: 0.1s;
  :hover {
    color: var(--main-color);
  }
`;

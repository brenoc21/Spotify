import styled from "styled-components";

export const NavBackground = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12.5%;
  min-height: 100vh;
  background-color: var(--dark-color);
  font-size: 0.85rem;
  gap: 2rem;
  .LogoContainer {
    padding-top: 8%;
    height: 4.5rem;
  }
`;
export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const OptionItem = styled.li`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: var(--main-color);
  }
`;

import styled from "styled-components";

export const NavBackground = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  width: 13.5%;
  min-height: 87vh;
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
  padding-top: 5%;
  padding-right: 10%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 300;
  gap: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  font-size: 0.75rem;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  #createPlaylist {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    width: 1.5rem;
    border-radius: 1px;
    height: auto;
    background-color: var(--light-color);
  }
  #likedSongs {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    border-radius: 1px;
    width: 1.5rem;
    height: auto;
    background-image: linear-gradient(135deg, #450af5, #c4efd9);
  }
`;

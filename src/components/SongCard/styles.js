import styled from "styled-components";

export const CardBg = styled.div`
  height: 285px;
  padding: 1rem;
  width: auto;
  position: relative;
  aspect-ratio: 5/7;
  background-color: var(--gray);
  align-items: center;
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  transition: 0.5s;
  gap: 0.5rem;
  flex-direction: column;
  .textContainer {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .title {
      font-size: 16px;
      align-self: flex-start;
    }
    .artist {
      align-self: flex-start;
      font-size: 12px;
      font-weight: 300;
      opacity: 0.7;
    }
  }

  .picture {
    border-radius: 1px;
    aspect-ratio: 1/1;
    width: 100%;
    height: auto;
    box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  }
  button {
    position: absolute;

    cursor: pointer;
    right: 1.5rem;
    bottom: 6.1rem;
    opacity: 0;
    aspect-ratio: 1/1;
    width: 2.5rem;
    height: auto;
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }
  .play {
    background-color: var(--main-color);
    border-radius: 100vw;
  }
  :hover {
    background-color: #2a2a2a;
    button {
      opacity: 1;

      bottom: 6.5rem;
    }
  }
`;

import styled from "styled-components";

export const PlayerBG = styled.div`
  min-width: 100vw;
  height: 13vh;
  bottom: 0;
  background-color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  .songImage {
    height: 3.2rem;
    width: auto;
    cursor: pointer;
  }
  .title {
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
  }
  .artist {
    font-size: 0.75rem;
    font-weight: 400;
    cursor: pointer;
    opacity: 0.8;
    :hover {
      opacity: 1;
    }
  }
  .like {
    transition: 0.1s;
    cursor: pointer;
    opacity: 0.8;
    :hover {
      opacity: 1;
    }
  }
`;
export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  width: 35%;
`;
export const RightContent = styled.div`
  display: flex;
  justify-items: center;
  gap: 0.7rem;
  img {
    transition: 0.1s;
    cursor: pointer;
    opacity: 0.8;
    :hover {
      opacity: 1;
    }
  }
  .volumeRange {
    width: 5rem;
  }
`;

export const RangeInput = styled.input`
  height: 20px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  opacity: 0.7;
  background-color: transparent;
  :focus {
    outline: none;
  }
  :hover {
    opacity: 1;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000;
    background: var(--light-color);
    border-radius: 5px;
    border: 0px solid #000000;
  }
  /* :hover::-webkit-slider-runnable-track {
    background: var(--main-color);
  } */
  ::-webkit-slider-thumb {
    display: none;
    box-shadow: 0px 0px 0px #ffffff;
    border: 1px solid #b8b8b8;
    height: 12px;
    width: 12px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }
  :hover::-webkit-slider-thumb {
    display: block;
  }
  :focus::-webkit-slider-runnable-track {
    background: #d45252;
  }
  ::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #d45252;
    border-radius: 5px;
    border: 0px solid #000000;
  }
  ::-moz-range-thumb {
    box-shadow: 0px 0px 0px #ffffff;
    border: 1px solid #b8b8b8;
    height: 21px;
    width: 20px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
  }
  ::-ms-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    transition: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  ::-ms-fill-lower {
    background: #d45252;
    border: 0px solid #000000;
    border-radius: 10px;
    box-shadow: 0px 0px 0px #000000;
  }
  ::-ms-fill-upper {
    background: #d45252;
    border: 0px solid #000000;
    border-radius: 10px;
    box-shadow: 0px 0px 0px #000000;
  }
  ::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #ffffff;
    border: 1px solid #b8b8b8;
    height: 21px;
    width: 20px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
  }
  :focus::-ms-fill-lower {
    background: #d45252;
  }
  :focus::-ms-fill-upper {
    background: #d45252;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  button {
    cursor: pointer;
    opacity: 0.7;
    aspect-ratio: 1/1;
    width: 1.8rem;
    height: auto;
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      opacity: 1;
    }
  }
  .play {
    background-color: var(--light-color);
    border-radius: 100vw;
  }
`;

import styled from "styled-components";

export const CheckboxInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 10px;
  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--dark-color);
    font-size: 0.8rem;
    font-weight: 400;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  @media screen and (max-width: 425px) {
    align-self: center;
    width: 98%;
    label {
      font-size: 0.6rem;
    }
  }
`;
export const CheckboxBtn = styled.label`
  display: flex;
  min-width: 18px;
  min-height: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--dark-color);
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  cursor: pointer;
  z-index: 2;
  :hover {
    border: 1px solid var(--main-color);
  }
  .checkmark {
    border-radius: 2px;
    width: 150%;
    height: 150%;
    overflow: hidden;
    display: inline-block;
    background-color: var(--main-color);
    color: white;
    opacity: 0;
    transition: 0.3s;
    z-index: 1;
  }

  input {
    display: none;
    :checked {
      + .checkmark {
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 425px) {
    min-width: 14px;
  }
`;

import styled from "styled-components";

export const RadioInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    color: var(--dark-color);
    font-weight: 400;
  }
  .items-container {
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 1.5rem;
    width: 100%;
    justify-content: space-between;
    .radioLabel {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      gap: 0.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-weight: 400;
      color: var(--dark-color);
    }
  }
  gap: 0.5rem;

  @media screen and (max-width: 425px) {
    align-self: center;
    width: 98%;
    label {
      font-size: 0.8rem;
    }
  }
`;
export const RadioBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18px;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--gray);
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    border: 1px solid var(--main-color);
  }
  .checkmark {
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background-color: var(--main-color);
    display: inline-block;
    opacity: 0;
    border-radius: 50%;
    transition: 0.3s;
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
    .checkmark {
      width: calc(100% - 2px);
      height: calc(100% - 2px);
    }
  }
`;

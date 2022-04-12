import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    color: black;
    font-weight: 400;
  }
  input {
    outline: none;
    border: none;
    line-height: 1.5rem;
    font-size: 1rem;
    padding: 14px;
    color: var(--dark-color);
    box-shadow: inset 0 0 0 1px #878787;
    border-radius: 4px;
    :focus {
      box-shadow: inset 0 0 0 1px #323232;
    }
  }
`;

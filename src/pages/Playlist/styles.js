import styled from "styled-components";

export const ContentArea = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  background: var(--dark-third-color);
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
export const CardArea = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;

  gap: 0.5rem;
  padding: 2rem;
`;

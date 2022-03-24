import styled from "styled-components";

export const PlaylistBG = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-third-color);
`;
export const ContentArea = styled.div`
  overflow: scroll;
  padding: 0 0 13vw 13.5vw;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
export const CardArea = styled.div`
  padding: 2rem;
`;

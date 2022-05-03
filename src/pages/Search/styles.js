import styled from "styled-components"

export const Background = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: var(--dark-third-color);
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SearchBarContainer = styled.div`
width: 50%;
position: relative;
padding: 1rem;
height: 1rem;
`
export const SearchBar = styled.input`
width: 100%;
color: black;
height: 100%;
padding: 1rem;
border: none;
border-radius: 100vw;
`
export const SongsContainer = styled.div`
height: 20rem;
overflow: auto;
width: 90%;

`
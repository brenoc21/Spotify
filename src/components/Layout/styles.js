import styled from "styled-components";

export const LayoutBG = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    width: 100%;
    height: 100%;
    max-height: 87vh;
    display: flex;
    flex: 1;
`;

export const ChildrenContent = styled.div`
    width: 100%;
    min-height: 100%;
    background: ${(props) => props.bg};
    overflow: auto;
`;
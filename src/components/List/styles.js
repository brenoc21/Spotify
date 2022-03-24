import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 47vh;
    height: fit-content;
    gap: 5rem;
    min-height: 240px;
    padding: 1rem 0rem;
`;

export const Ul = styled.ul`
    font-size: 1.2rem;
    display: flex;
    width: 45%;
    word-spacing: 0.25rem;
    justify-content: space-between;
`;

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    

    small {
        margin-bottom: 1rem;
    }
`;
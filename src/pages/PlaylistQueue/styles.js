import styled from "styled-components";

export const PlaylistBG = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: var(--dark-third-color);
    display: block;
`;

export const Container = styled.div`
`;

export const PlaylistHeader = styled.div`
    padding: 5vw;
    background: linear-gradient(var(--main-color), var(--dark-third-color));
    .title {
        margin-left: 1rem;
        font-weight: bold;
    }
    h1 {
        margin-left: 1rem;
        font-size: 100px;
    }
    div {
        display: inline-block;
        p {
            margin-left: 1rem;
        }
    }
`;

export const PlaylistPlayerDiv = styled.div`
    padding-bottom: 2rem;
    padding-left: 5vw;
    button {
        
        cursor: pointer;
        aspect-ratio: 1/1;
        width: 3.5rem;
        height: auto;
        background-color: transparent;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;

        &:hover {
          transform: scale(1.1);
        }
      }
      .play {
        background-color: var(--main-color);
        border-radius: 100vw;
      }
`;

export const PlaylistBody = styled.div`
padding-left: 5vw;
padding-right: 5vw;
`;

export const Table = styled.div`
    ::-webkit-keyframes autofill {
        color: #666;
        background: transparent;
}
    .table {
        text-align: left;
        border-collapse: collapse;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
      }

      .table thead {
          border-bottom: solid var(--gray) 1.5px;
      }
      
      .table tbody tr{
        cursor: pointer;
        &:hover {
            background: var(--gray);
            transition: width 2s;
        }
      }

      .table thead th{
        padding-top: 2rem;
      }
      
      .table th {
        color: var(--light-color);
      }
      
      .table td {
        color: var(--light-color);
        padding: 1rem 0;
      }
`;
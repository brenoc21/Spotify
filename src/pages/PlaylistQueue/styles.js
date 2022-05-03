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
    .trash{
      position: absolute;
      top: 5%;
      right: 5%;
      cursor: pointer;
      opacity: 0.8;
      transition: 0.2s;
      :hover{
        opacity: 1;
      }
    }
    h1 {
        margin-left: 1rem;
        font-size: 48px;
        cursor: pointer;
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
        width: 4rem;
        
        color: var(--light-color);
        padding: 1rem 0;
      }
     .text{
      width: 100%;
        display: -webkit-box;
   -webkit-line-clamp: 2; 
           line-clamp: 2; 
   -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
`;
export const AddButton = styled.button`
background-color: var(--main-color);
align-self: center;
margin-left: 5vw;
margin-bottom: 2rem;
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 100vw;
opacity: 0.8;
width: 4rem;
height: 4rem;
cursor: pointer;
transition: 0.2s;
.svg{
  width: 40%;
  height: 40%;
}
:hover{
  opacity: 1;
}
`
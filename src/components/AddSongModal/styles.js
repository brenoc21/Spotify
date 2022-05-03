import styled from "styled-components"

export const BgModal = styled.div`
width: 86.5%;
height: 100%;
position: absolute;
background-color: rgba(0,0,0, 0.3);
display: flex;
align-items: center;
justify-content: center;
z-index: 999;
`
export const ModalBody = styled.div`
width: 60%;
height: 60%;
background-color: #282828;
border-radius: 10px;
padding: 3rem;
`
export const TrackContainer = styled.div`
display: flex;
gap: 0.5rem;
padding: 2rem 1rem 0rem 1rem;
.trackItem{
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
   -webkit-line-clamp: 1; 
           line-clamp: 1; 
   -webkit-box-orient: vertical;
   
}
.addButton{
    width: 50%;
    background-color: #282828;
    background-color: transparent;
    border-radius: 100vw;
    border: 2px solid white;
    opacity: 0.6;
    cursor: pointer;
    transition: 0.2s;
    :hover{
        opacity: 1;
    }
}
`
import styled from "styled-components"

export const BgModal = styled.div`
width: 60%;
height: 7rem;
right: 1rem;
top: 10%;

position: absolute;
display: flex;
align-items: center;
justify-content: center;
z-index: 999;
`
export const ModalBody = styled.div`
width: 100%;
height: 100%;
display: flex;
border-radius: 10px;
align-items: center;
padding: 1rem;
gap: 1rem;
background-color: #282828;
border-radius: 10px;
`
export const Input = styled.input`
width: 90%;
height: 2rem;
padding: 1rem;
background-color: rgba(255,255,255, 0.1);
border: none;
border: 1px solid transparent;
color: white;
transition: 0.5s;
:focus{
    border: 1px solid rgba(255,255,255, 0.5);
}
`
export const Button = styled.button`
min-width: 10%;
width: 10%;
height: 2rem;
background-color: white;
border: none;
border-radius: 100vw;
color: black;
font-size: 1rem;
`
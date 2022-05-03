import styled from "styled-components";

export const Background = styled.div`
  * {
    color: white;
  }
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  background-color: rgba(0,0,0,0.6);
  z-index: 999;
`;

export const Modal = styled.div`
height: 100vh;
width: 40%;
padding: 2% 5%;
margin: auto auto;
background-color: #fff;
overflow: auto;
img {
    width: 15rem;
  }
  h1 {
    color: var(--dark-color);
    text-align: center;
  }

  #Content-Container {
    max-width: 450px;
    margin: 0px auto;
    padding-bottom: 8rem;
  }
  #Title {
    color: var(--dark-color);
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
    font-size: 1.75rem;
  }

  .logo {
    display: flex;
    justify-content: center;
    padding: 1rem 0rem;
    min-width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight: 600;
  }
  .main-container [type="text"],
  [type="password"] {
    outline: none;
    border: none;
    line-height: 1.5rem;
    font-size: 1rem;
    padding: 14px;
    box-shadow: inset 0 0 0 1px #878787;
    border-radius: 4px;
  }
  .main-container [type="text"]:focus,
  [type="password"]:focus {
    box-shadow: inset 0 0 0 1px #323232;
  }
  #Main-Content {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }
  #Alternative-Login-Container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .smLogin {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    border-radius: 100vw;
    padding: 0.5rem 2.2rem;
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid #545454;
    gap: 0.5rem;
    cursor: pointer;
  }
  .svg {
    color: white;
  }
  .smLogin:hover {
    -webkit-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);
  }
  .division {
    align-self: center;
    justify-content: center;
    width: 87.5%;
    gap: 1rem;
    letter-spacing: 2px;
    display: flex;
    flex-direction: row;
    color: rgb(180, 180, 180);
  }

  .line {
    border-top: 1px solid rgb(204, 204, 204);
    content: "";
    display: table-cell;
    position: relative;
    top: 0.8em;
    width: 42%;
  }
  .radio-container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }
  .radio-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  [type="submit"] {
    align-self: center;
    cursor: pointer;
    width: 50%;
    font-size: 1rem;
    padding: 1rem 3rem;
    border-radius: 100vw;
    margin-top: 2rem;
    border: none;
    color: white;
    background-color: #d45252;
  }
  [type="submit"]:hover {
    -webkit-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);
    background-color: #d65b5b;
    margin-bottom: 2rem;
  }
  [type="checkbox"] {
    align-self: flex-start;
  }
  .Smaller-Text {
    font-weight: 400;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    #Content-Container {
      padding-left: 24px;
      padding-right: 24px;
      box-sizing: border-box;
    }
    [type="submit"] {
      width: inherit;
    }
    .smLogin {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1440px){
    width: 60%;
  }
`

import styled from "styled-components";

export const Background = styled.footer`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 4rem 15% 2rem 15%;
  background-color: var(--dark-color);
  .logo {
    padding: 0.75rem;
    border-radius: 100%;
    width: 2.5rem;
    height: auto;
    background-color: var(--dark-secondary-color);
  }
  #up {
    display: flex;
    justify-content: space-around;
    margin-bottom: 6%;
    a {
      :hover {
        color: var(--main-color);
      }
    }
  }
  h4 {
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.5);
  }
  ul {
    display: flex;
    font-size: 1.2rem;
    display: flex;
    gap: 3rem;
  }
  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .socialMedia {
    fill: var(--light-color);
    cursor: pointer;
    svg {
      padding: 0.75rem;
      border-radius: 100%;
      width: 2.5rem;
      height: auto;
      background-color: var(--dark-secondary-color);
      transition: 0.2s;
      :hover {
        color: var(--main-color);
        transform: scale(1.02);
      }
    }
  }
  #down {
    display: flex;
    gap: 2rem;
    width: 100%;
    display: flex;
    p {
      &:last-child {
        align-self: flex-end;
        margin-left: auto;
      }
      &:hover {
        cursor: pointer;
        color: var(--main-color);
      }
    }
  }
  @media (max-width: 1600px) {
    width: 100%;
    padding: 4rem 0%;
    padding-bottom: 2rem;

    #down {
      margin-left: auto;
      margin-right: auto;
      width: 90%;
    }
  }
`;

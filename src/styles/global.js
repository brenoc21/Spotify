import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

:root {
    --main-color: #d45252;
    --secondary-color: #4a306d;
    --light-color: #efd9ce;
    --dark-color: #080708;
    --dark-secondary-color: #25283d;
    --white: #fff;
}

* {
    box-sizing: border-box;
    margin: 0;
    color: var(--light-color);
    font-family: "Poppins", sans-serif;
}

a {
    cursor: pointer;
    text-decoration: none;
    color: var(--light-color);
    user-select: none;
}

ul {
    margin: 0;
    padding-left: 0;
    list-style-type: none;
}

p, h1, h2, h3, h4{
    margin: 0;
}

input:focus {
    outline: none;
}
`
export default GlobalStyle;
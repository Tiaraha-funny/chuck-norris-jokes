import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: #f9f9f9;
    font-family: Open-Sans, Helvetica, Sans-Serif;
}

img {
    max-width: 100%;
}

button {
    cursor: pointer;
}

select.category > option {
    background-color: #f5f6f8;
    height: 100px;
    font-family: Inter;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    text-align: left;
    color: #34394f;
    outline: none;
    border: none;
}



select option:hover {
    color:black;
    background-color: green !important;
}
`

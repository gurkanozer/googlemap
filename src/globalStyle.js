import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    font-size:16px;
    font-family:'Inter', sans-serif;
}
body{
    width:100%;
    height:100%;
    min-height:100vh;
    background:${({ theme }) => theme.colors.white};
}
*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
button{
    border:none;
    outline:none;
    cursor:pointer;
    background:none;
}

img {
    width: 100%;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color:inherit;
    font-size:1rem;
}
`;
export default GlobalStyle;

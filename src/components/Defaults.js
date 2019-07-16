import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=optional");
    @import url("https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&display=optional");

    :root {
        --font-primary: Lato;
        --font-secondary: Oswald;

        --color-one: hsl(340, 60%, 65%);
        --color-two: hsl(250, 60%, 65%);
        --color-three: hsl(220, 60%, 65%);
        --color-four: hsl(160, 60%, 40%);
        --color-white: #fcfcfc;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        position: relative;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export default Defaults;

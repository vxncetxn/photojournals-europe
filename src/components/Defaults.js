import { createGlobalStyle } from "styled-components";

const Defaults = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=optional");
    @import url("https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&display=optional");

    :root {
        --font-primary: Lato;
        --font-secondary: Oswald;

        --color-one: hsl(340, 60%, 65%);
        --color-one-aa-accessible-large: hsl(340, 60%, 51%);
        --color-two: hsl(250, 60%, 65%);
        --color-two-aa-accessible-large: hsl(250, 60%, 60%);
        --color-three: hsl(220, 60%, 65%);
        --color-three-aa-accessible-large: hsl(220, 60%, 52%);
        --color-four: hsl(160, 60%, 40%);
        --color-four-aa-accessible-large: hsl(160, 61%, 31%);
        --color-white: #fcfcfc;
        --color-gray: #cccccc;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        // scroll-snap-type: y mandatory;
    }

    body {
        position: relative;
        // scroll-snap-type: y mandatory;
    }

    // div[role=group] {
    //     scroll-snap-type: y mandatory;
    // }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export default Defaults;

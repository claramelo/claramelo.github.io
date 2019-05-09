import { createGlobalStyle } from "styled-components";

const GlobalCss = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Cabin');
    
    html {
        font-family: 'Cabin', sans-serif;
        background: url('https://media.giphy.com/media/FlodpfQUBSp20/giphy.gif');
        background-repeat: repeat;
    }
`

export { GlobalCss as default};
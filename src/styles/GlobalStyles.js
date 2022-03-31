import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html {
        min-height: 100%;
        background: linear-gradient(150deg, #53F 15%, #05D5FF);
    }
    *,button, input{
        border: 0;
        background: none;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    ul {
        list-style: none;
        padding-left: 0;
    }

    ::-webkit-scrollbar {
        width: 0;
    }
`;

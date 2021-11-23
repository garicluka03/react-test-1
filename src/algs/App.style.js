import styled from "styled-components";
import App from "./App";
export const StyledApp = styled(App)`
    background-color: yellow;
    min-height: 70vh;
    text-align: center;
    .individual>*{
        font-size: 2em;
        display: inline-block;
        margin-right: 10px;
    }
    .green{
        background-color: green;
    }
    .red{
        background-color: red;
    }
    .desc{
        color: darkorange;
    }
    .real{
        font-size: 2.3em;
    }
    .check{
        border-radius:25%;
        width: 50px;
    }

`
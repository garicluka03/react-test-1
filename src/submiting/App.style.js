import styled from "styled-components";
import App from "./App"
export const StyledApp = styled(App)`
    
    background-color: darkorange;
    height: 30vh;
    min-height: 300px;
    @media (max-width:600px){
        min-height: 500px;
    }
    `
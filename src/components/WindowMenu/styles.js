import styled from "styled-components";

export const WindowMenuWrapper = styled.div`
    display: flex;
    -webkit-app-region: drag;
    
    & > div {
        display: flex;
        flex-grow: 1;
        padding: 8px;
    }

    ul {
        display: flex;
	    flex-grow: 0;
    }

    p {
        font-size: 0.8em;
    }

    .button {
        padding: 10px 15px;
        -webkit-app-region: no-drag;
    }

    .button:hover{
        background-color: blue;
    }

    .button#close:hover{
        background-color: red
    }
`
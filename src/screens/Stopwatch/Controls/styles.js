import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    svg {
        font-size: 1.4em;
        margin: 0 10px;
        padding: 10px;
    }
    svg:hover {
        background-color: rgb(30,30,30);
    }
`

export const Stopwatch = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 3em;
        text-align: center;
        display: flex;
        flex: 1;
        align-items: flex-end;
    }
`
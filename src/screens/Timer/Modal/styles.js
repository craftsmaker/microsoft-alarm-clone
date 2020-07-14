import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 55px);
    justify-content: flex-start;
    align-items: center;

    p {
        display: flex;
        flex: 3;
        width: 100%;
        padding-top: 80px;
        align-items: center;
        justify-content: center;
        font-size: 10em;
    }
`

export const FooterWrapper = styled.div`
    display: flex;
	flex-direction: column;
    flex: 1;
    justify-content: flex-start;
	align-items: center;
`

export const Buttons = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10px;

    svg:hover {
        background-color: rgb(50,50,50);
    }

    .refreshButton {
        font-size: 1.6em;
        position: relative;
        font-size: 25px;
        top:0;
        padding: 20px;
    }

    .playButton {
        font-size: 1.6em;
        color: white;
        border-radius: 100%;
        padding: 20px;
        margin: 0 15px;
        border: 1px solid gray;
    }

    .minimizeButton {
        font-size: 1.6em;
        font-size: 25px;
        position: relative;
        top: 0;
        padding: 20px;
    }
`
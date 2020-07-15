import styled from "styled-components";
import Main from "../../components/Main";

export const AddWrapper = styled(Main)`
    font-family: "Roboto",sans-serif;
	padding: 10px 25px;
`

export const TimeControllerWrapper = styled.div`
    display: flex;
	flex-direction: column;
	flex-grow: 1;
    max-height: 70vh;
    
    h1 {
        letter-spacing: 0.1em;
    }
`

export const TimeControllerFooter = styled.ul`
    display: flex;
	flex-direction: row;
    flex: 1;
    
    li {
        flex: 1;
        text-align: center;
        color: rgb(150,150,150);
    }
`

export const TargetNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    line-height: 2em;
	font-size: 0.8em;
    letter-spacing: 0.06em;
    
    h1 {
        color: rgb(50,140,255);
    }

    h1:hover {
        color: rgb(160,160,200);
	    cursor: text;
    }
`

export const TimerControllerControlls = styled.div`
    display: flex;
	flex-grow: 1;
	max-height: 40vh;
	padding: 10px 0 0 0;
    position: relative;
    
    div {
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    & > div {
        border: 1px solid white;
        background-color: rgb(30,30,30);
        position: relative;
        display: flex;
        flex:1;
    }

    & > div > div {
        display: flex;
        flex-grow: 1;
        width: 100%;
        justify-content: center;
        position: relative;
        z-index: 1;
        color: white;
    }

    .middleBar {
        position: absolute;
        bottom: 46%;
        height: 20px;
        width: 100%;
        background-color: rgba(0,130,200,0.8);
    }

    .arrowUp {
        display: flex;
        flex-grow: 0;	
        top: 0;
        background-color: rgba(30,30,30,0);
        height: 80px;
        width: 100%;
        z-index: 1;
        color: rgba(255,255,255,0);
    }

    .arrowDown {
        display: flex;
        flex-grow: 0;
        background-color: rgba(30,30,30,0);
        height: 80px;
        width: 100%;
        color: rgba(255,255,255,0);
    }
`
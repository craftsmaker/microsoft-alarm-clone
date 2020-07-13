import styled from "styled-components";

export const StopList = styled.div`
    display: flex;
	flex-direction: column;
	padding: 20px;
`

export const Header = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
    margin-left: 15px;
    
    h1,h2 {
        font-size: 0.9em;
	    text-align: justify;
    }

    h1 {
        color: rgb(150,150,150);
    }

    h2 {
        color: rgb(100,100,100);
    }

`

export const StopWrapper = styled.div`
    display: flex;
    padding: 10px 0;
    h3 {
        margin-right: 10px;
	    font-size: 0.8em;
	    color: rgb(100,100,100);
    }
`
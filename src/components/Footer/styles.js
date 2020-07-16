import styled from "styled-components";

export const FooterWrapper = styled.footer`
    height: 40px;
	position: absolute;
	background-color: rgb(30,30,30);
	bottom: 0;
    width: 100vw;
    
    ul {
        display: flex;
        height: 100%;
    }

    li {
        display: flex;
    }

    a {
        display: flex;
        flexGrow: 0;
        align-items: center;
        justify-content: center;
        width: 0.8rem;
    }

    .button {
        padding: 0 2rem;
	    height: 100%;
    }

    #plus p {
        cursor: inherit;
        color: white;
        font-size: 20px;
    }

    svg {
        font-size: 16px;
    }
` 
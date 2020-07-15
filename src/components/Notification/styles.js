import styled from "styled-components";

export const NotificationWrapper = styled.div`
    display: flex;
    flex: 0 0 30px;
    
    p {
        color: yellow;
	    font-size: 0.92em;
    }

    a {
        color: rgb(50,140,255);
        text-decoration: underline;
        cursor: pointer;
    }
    
    a:hover {
        color: rgb(160,160,200);
    }
`
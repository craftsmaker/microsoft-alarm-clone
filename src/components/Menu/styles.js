import styled from "styled-components";

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-basis: 50px;
    flex-shrink: 0;

    ul {
        display: flex;
	    flex-grow: 1;
    }

    li {
        display: flex;
	    flex-grow: 1;
    }

    a {
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        justify-content: center;
        align-items: center;
    }
`
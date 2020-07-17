import styled from "styled-components";
import {animated} from "react-spring";

export const MenuWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-basis: 50px;
    flex-shrink: 0;

    li {
        display: flex;
    }

    a {
        display: flex;
        width: 10rem;
        justify-content: center;
        align-items: center;
    }
    
`

export const NavigationContent = styled.ul`
    display: flex;
    flex-grow: 0;
    justify-content: flex-start;
    margin-left: 0px;
    margin-right: 50%;
    position: relative;
`

export const AnimatedBarWrapper = styled(animated.div)`
    position: absolute;
    height: 4px;
    background-color: #0078D7;
    bottom: 5px;
`
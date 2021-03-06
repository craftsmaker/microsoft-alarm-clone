import styled from "styled-components";

export const CheckboxWrapper = styled.div`
    display: flex;
    flexGrow: 0;
    alignItems: center;

    .checkboxInput{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    
    .checkboxCustomizedInput{
        position: relative;
        height: 25px;
        width: 25px;
        background-color: black;
        border: 3px solid white;
    }
    
    .check{
        position: absolute;
        display: none;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

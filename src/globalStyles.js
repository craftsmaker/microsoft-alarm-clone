import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        cursor: default;
        
    }

    body{
        background-color: black;
        overflow: hidden;
    }

    li {
        list-style-type: none;
    }

    ::selection {
        background: none;
    }

    ::-webkit-scrollbar{
        background: rgb(30,30,30);
    }
    ::-webkit-scrollbar-thumb	{
        background: rgb(100,100,100);
    }

    ::-webkit-scrollbar-thumb:hover{
        background: rgb(130,130,130);
    }

    ::-webkit-scrollbar-button:start:decrement,
    ::-webkit-scrollbar-button:end:increment  {
        display: block;	
    }

    ::-webkit-scrollbar-button:start:decrement{
        background-color: white;
        background-image: url("assets/arrowup.png");
        background-size: 100%;
    }
    ::-webkit-scrollbar-button:end:increment{
        background-color: white;
        background-image: url("assets/arrowdown.png");
        background-size: 100%;
    }

    a{
        text-decoration: none;
        font-size: 0.8em;
        font-family: "Roboto"
    }
    
    h1,h2,h3,h4,h5,h6{
        font-size: 1em;
    }
    
    .button {
        border: none;
        background-color: inherit;
        text-align: center;
        color: white;
        padding: 0;
        outline: none;
    }
    
    .button:hover {
        background-color: rgb(100,100,100);
    }

    @media (max-height: 700px){
        main {
            height: 77.5vh;
        }
    }
    
    @media (min-height: 700px){
        main{
            height: 86vh;
        }
    }
    
    @media (max-height: 400px){
        main{
            height: 56vh;
        }
    }
`
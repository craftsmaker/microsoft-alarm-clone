import React,{useState,useEffect,useRef} from 'react';
import "./style.css";
import ClockMenu from "./ClockMenu";
import Menu from "./Menu";
import Footer from "./Footer";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";


function App({dispatch,modules}) {
  const [timer,setTimer] = useState({});

  // let test = useRef({});
  // test.current = params;
  // console.log("Params:", params)
  // console.log("Test",test.current);
  // useEffect(() => {
  //   if (Object.keys(params).length > 1){
  //   //do something
  //     dispatch({type: "ADD_TIMER"})
  //     test = {};
  //     console.log(test)
  //   }
  // })
  
  console.log("App Reload")

  return (
    <div className="container">
    	<Menu/>
        <main>
            <ClockMenu/>
        </main>
        <Footer/>
    </div>
  );
}

export default connect(state => ({
  modules:state
}))(App);

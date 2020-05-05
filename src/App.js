import React from 'react';
import "./style.css";
import Timer from "./screens/Timer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {connect} from "react-redux";


function App({dispatch,modules}) {

  return (
    <div className="container">
    	<Header/>
      <main>
            <Timer/>
      </main>
      <Footer/>
    </div>
  );
}

export default connect(state => ({
  modules:state
}))(App);

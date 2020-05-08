import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Clock(){
	return(
		<div className="container">
			<Header/>
			<main>
				<p>Alarm Screen</p>
			</main>
			<Footer/>
		</div>
	)
}
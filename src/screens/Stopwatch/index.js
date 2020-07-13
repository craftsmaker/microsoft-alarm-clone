import React from "react";
import {useSelector} from "react-redux";
import Main,{StopwatchSelection} from "./styles";
import Controls from "./Controls";
import Stops from "./Stops";

export default function StopWatchView(){
	const stopWatch = useSelector(state => state.stopWatch);	
	return(
		<Main>
			<StopwatchSelection>
				<Controls/>
				<Stops marks={stopWatch.marks}/>
			</StopwatchSelection>
		</Main>
	)
}
import React,{memo} from "react";
import {StopList,Header,StopWrapper} from './styles';

export default memo( ({marks}) =>{
	const reversedStopwatch =[[...marks].reverse(),[]];
	
	// make the math (content: object)
	reversedStopwatch[0].forEach((content,index,array) => {
		let hour = parseInt(content.hour);
		let minute = parseInt(content.minute);
		let second = parseInt(content.second);
		let millisecondbyten = parseInt(content.millisecondbyten);
		let next = array[index + 1];
		
		if (next){
			millisecondbyten -= next.millisecondbyten;
			if (millisecondbyten < 0){
				--second;
				millisecondbyten = 100 + millisecondbyten;
			}

			second -= next.second;

			if(second < 0){
				--minute;
				second = 60 + second;
			}

			minute -= next.minute;
			
			if(minute < 0){
				--hour;
				minute = 60 + minute;
			}
			
			hour -= next.hour;


		}

		reversedStopwatch[1].push( {
			hour: String(hour).padStart(2,"0"),
			minute: String(minute).padStart(2,"0"),
			second: String(second).padStart(2,"0"),
			millisecondbyten: String(millisecondbyten).padStart(2,"0")
		});
	})

	return(
		<StopList>
			<Header>
				<h1>Voltas</h1>
				<h2>Parciais</h2>
			</Header>
			{reversedStopwatch[0].map((mark,index,array) => (
				<StopWrapper key={array.length - index} id="stopwatch-stop">
					<h3>{array.length - index}</h3>
					<div>
						<p>00:00:{reversedStopwatch[1][index].second},<span style={{display: "inline"}}>{reversedStopwatch[1][index].millisecondbyten}</span></p>
						<p>{mark.hour}:{mark.minute}:{mark.second}<span style={{fontSize: "0.8em", display: "inline"}}>,{mark.millisecondbyten}</span></p>
					</div>
				</StopWrapper>			
			))}						
		</StopList>
	)
})
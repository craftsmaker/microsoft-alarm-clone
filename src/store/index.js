import {createStore} from "redux";

const INITIAL_STATE = {
	timer: {},
	clocks: [],
}


function reducer(state = INITIAL_STATE,action){
	console.log(action.type);
	let sizeOfClocks = String([...state.clocks].length + 1)
	switch(action.type)
	{
		case "ADD_TIMER":
			const parsedClocks = 
			[
				...state.clocks,
				{
					id: sizeOfClocks ,
					timer: action.timer
				}
			];
			
			console.log(sizeOfClocks,JSON.stringify(action.timer))
			localStorage.setItem(sizeOfClocks,JSON.stringify(action.timer))
			return {
				...state,
				timer: action.timer,
				clocks: parsedClocks
		}
		case "RESET_TIMER":
			return {...state,timer: {}, clocks: [...state.clocks]};
		case "ADD_CLOCKS":
			return {...state, timer: {}, clocks: action.clocks}
		default:
			return {...state,timer: {}, clocks: [...state.clocks]};
	}
}

const store = createStore(reducer);

export default store;
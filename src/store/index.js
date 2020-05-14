import {createStore,combineReducers} from "redux";

const STOPWATCH_STATE = {
	isActivated: false,
	hour: "00",
	minute: "00",
	second: "00",
	microsecond: "00",
	marks: []
}

function stopWatch(state = STOPWATCH_STATE,action){
	console.log(action.type);
	switch(action.type)
	{
		case "INCREMENT_HOUR":
			return {...state,hour: action.hour};
		case "INCREMENT_MINUTE":
			return {...state,minute: action.minute,second: "00",microsecond: "00"};
		case "INCREMENT_SECOND":
			return {...state,second: action.second, minute: "00",microsecond: "00"};
		case "INCREMENT_MICROSECOND":
			return {...state,microsecond: action.microsecond};
		case "RESET_STOPWATCH":
			return STOPWATCH_STATE;
		case "ADD_MARK":
			return {...state, marks: [...state.marks,{hour:state.hour,minute:state.minute,second:state.second,microsecond:state.microsecond}]}
		case "ACTIVATE":
			return {...state, isActivated: true};
		case "DEACTIVATE":
			return {...state, isActivated: false};
		default:
			return state;
	}
}

const TIMER_STATE = {
	timer: {},
	clocks: [],
}

function timer(state = TIMER_STATE,action){
	
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


const store = createStore(combineReducers({timer,stopWatch}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
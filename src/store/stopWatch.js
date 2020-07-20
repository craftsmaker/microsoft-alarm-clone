import {
	INCREMENT_HOUR,
	ACTIVATE,
	ADD_MARK,
	DEACTIVATE,
	INCREMENT_MILLISECONDBYTEN,
	INCREMENT_MINUTE,
	INCREMENT_SECOND,
	RESET_STOPWATCH
} from "./stopWatchActionTypes";

const STOPWATCH_STATE = {
	isActivated: false,
	hour: "00",
	minute: "00",
	second: "00",
	millisecondbyten: "00",
	marks: []
}

export default function(state = STOPWATCH_STATE,action){
	switch(action.type)
	{
		case INCREMENT_HOUR:
			return {...state,hour: action.hour};
		case INCREMENT_MINUTE:
			return {...state,minute: action.minute,second: "00",millisecondbyten: "00"};
		case INCREMENT_SECOND:
			return {...state,second: action.second, minute: "00",millisecondbyten: "00"};
		case INCREMENT_MILLISECONDBYTEN:
			return {...state,millisecondbyten: action.millisecondbyten};
		case RESET_STOPWATCH:
			return STOPWATCH_STATE;
		case ADD_MARK:
			return {...state, marks: [...state.marks,{hour:state.hour,minute:state.minute,second:state.second,millisecondbyten:state.millisecondbyten}]}
		case ACTIVATE:
			return {...state, isActivated: true};
		case DEACTIVATE:
			return {...state, isActivated: false};
		default:
			return state;
	}
}

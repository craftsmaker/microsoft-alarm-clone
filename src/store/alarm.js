const INITIAL_STATE = {
    placeholderAlarm: {
        hours: "00",
        minutes: "00",
        seconds: "00",
        millisecondsbyten: "00"
    },
    alarms: []
}

export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case "SET_ALARM_PLACEHOLDER":
			return {...state, placeholderAlarm: {
				hours: action.hours,
				minutes: action.minutes,
				seconds: action.seconds
            }}
        case "ADD_ALARM":
            const alarm = {...state.placeholderAlarm,millisecondbyten: "00"};
            // const parsedClocks = 
            // [
            //     ...state.clocks,
            //     {
            //         id: sizeOfClocks ,
            //         timer: timer
            //     }
            // ];
            
            // localStorage.setItem(sizeOfClocks,JSON.stringify(timer))
            return {...state, alarms: [...state.alarms, alarm]}
        default:
            return state;
    }
}
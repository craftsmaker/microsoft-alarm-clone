import {transformListOfStringfiedObjectsIntoArray} from "../utils";

const INITIAL_STATE = {
    placeholderAlarm: {
        hours: "00",
        minutes: "00",
        seconds: "00",
        millisecondsbyten: "00"
    },
    alarms: [],
    toggleDeleteList: {isVisible:false,toggle: () => {}}
}

export default function(state=INITIAL_STATE,action){
    const alarm = {...state.placeholderAlarm,millisecondbyten: "00"};
    const toggleDeleteList = {...state.toggleDeleteList};

    switch(action.type){
        case "SET_ALARM_PLACEHOLDER":
			return {...state, placeholderAlarm: {
				hours: action.hours,
				minutes: action.minutes,
				seconds: action.seconds
            }}
        case "ADD_ALARM":        
            let alarms = transformListOfStringfiedObjectsIntoArray(localStorage.getItem("alarms"));
            if(alarms){
                alarms.push(alarm);
                alarms = alarms.map(alarm => JSON.stringify(alarm));
                
                localStorage.setItem("alarms",alarms.join());
            }else
                localStorage.setItem("alarms", JSON.stringify(alarm));

            return {...state, alarms: [...state.alarms, alarm]}
        case "ADD_ALARMS":
            return {...state,alarms: action.alarms};
        case "SET_TOGGLER":
            return {...state,toggleDeleteList: {isVisible: false,toggle: action.setter}};
        case "TOGGLE_DELETE_LIST":
            console.log(toggleDeleteList.toggle)
            toggleDeleteList.toggle(toggleDeleteList.isVisible);
            return {...state, toggleDeleteList: {isVisible: !toggleDeleteList.isVisible, toggle: toggleDeleteList.toggle}}
        default:
            return state;
    }
}
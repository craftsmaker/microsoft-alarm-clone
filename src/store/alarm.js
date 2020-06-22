import {transformListOfStringfiedObjectsIntoArray,deleteItemLOILS} from "../utils";

const INITIAL_STATE = {
    placeholderAlarm: {
        hours: "00",
        minutes: "00",
        seconds: "00",
        millisecondsbyten: "00"
    },
    alarms: [],
    checkedAlarmIDs: [],
    toggleDeleteList: {isVisible:false,toggle: () => {}}
}

export default function(state=INITIAL_STATE,action){
    let alarm = {...state.placeholderAlarm,millisecondbyten: "00"};
    let toggleDeleteList = {...state.toggleDeleteList};
    let checkedAlarmIDs = [...state.checkedAlarmIDs];

    console.log(action.type);
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
            toggleDeleteList.toggle(toggleDeleteList.isVisible);
            checkedAlarmIDs = [];
            return {...state,checkedAlarmIDs, toggleDeleteList: {isVisible: !toggleDeleteList.isVisible, toggle: toggleDeleteList.toggle}}
        case "TOGGLE_ALARM_CHECK":
            if (checkedAlarmIDs.some(id => id === action.identifier)){
                const id = checkedAlarmIDs.indexOf(action.identifier)
                checkedAlarmIDs.splice(id, id + 1);
            }else{
                checkedAlarmIDs.push(action.identifier)    
            }
            
            return {...state, checkedAlarmIDs};
        case "DELETE_SELECTED_ALARMS":
            checkedAlarmIDs.forEach(ID => deleteItemLOILS("alarms",ID))
            checkedAlarmIDs = [];
            toggleDeleteList.toggle(true);
            return {...state,checkedAlarmIDs,toggleDeleteList: {...toggleDeleteList, isVisible: !toggleDeleteList.isVisible}}
        default:
            return state;
    }
}
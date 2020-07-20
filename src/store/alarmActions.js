import {
    SET_PLACEHOLDER,
    TOGGLE_DELETE_LIST,
    TOGGLE_ALARM_CHECK,
    SET_TOGGLER,
    DELETE_SELECTED_ALARMS,
    ADD_ALARMS,
    ADD_ALARM
} from "./alarmActionTypes";

export function setPlaceholder(hours,minutes,seconds){
    return {
        type: SET_PLACEHOLDER,
        hours,
        minutes,
        seconds
    }
}

export function toggleDeleteList(){
    return {
        type: TOGGLE_DELETE_LIST
    }
}

export function toggleAlarmCheck(identifier){
    return {
        type: TOGGLE_ALARM_CHECK,
        identifier
    }
}

export function setToggler(setter){
    return {
        type: SET_TOGGLER,
        setter
    }
}

export function deleteSelectedAlarms(){
    return {
        type: DELETE_SELECTED_ALARMS,
    }
}

export function addAlarms(alarms){
    return {
        type: ADD_ALARMS,
        alarms
    }
}

export function addAlarm(){
    return {
        type: ADD_ALARM,
    }
}
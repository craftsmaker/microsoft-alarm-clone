import {
    ACTIVATE,
    ADD_MARK,
    DEACTIVATE,
    INCREMENT_HOUR,
    INCREMENT_MILLISECONDBYTEN,
    INCREMENT_MINUTE,
    INCREMENT_SECOND,
    RESET_STOPWATCH
} from "./stopWatchActionTypes";


export function activate(){
    return {
        type: ACTIVATE,
    }
}

export function deactivate(){
    return {
        type: DEACTIVATE
    }
}

export function addMark(){
    return {
        type: ADD_MARK
    }
}

export function resetStopWatch(){
    return {
        type: RESET_STOPWATCH
    }
}

export function incrementHour(hour){
    return {
        type: INCREMENT_HOUR,
        hour
    }
}

export function incrementMinute(minute){
    return {
        type: INCREMENT_MINUTE,
        minute
    }
}

export function incrementSecond(second){
    return {
        type: INCREMENT_SECOND,
        second
    }
}

export function incrementMillisecondByTen(millisecondbyten){
    return {
        type: INCREMENT_MILLISECONDBYTEN,
        millisecondbyten
    }
}
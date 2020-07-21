import {
    ACTIVATE_TIMER,
    ADD_CLOCKS,
    ADD_TIMER,
    CHANGE_MODAL,
    DEACTIVATE_TIMER,
    DECREMENT_COUNTER,
    DELETE_SELECTED_TIMERS,
    RESET_COUNTER,
    SET_PLACEHOLDER,
    SET_TIMER_TOGGLER,
    TOGGLE_TIMER_CHECK,
    TOGGLE_TIMER_DELETE_LIST
  } from "./timerActionTypes";

/**
 * @param {number} identifier
 * @param {Array} modal
 */

export function changeModal(modal,identifier){
  return {
    type: CHANGE_MODAL,
    modal,
    identifier
  }
}

export function addTimer(){
  return {
    type: ADD_TIMER
  }
}

/**
 * @param {number} identifier
 */

export function activateTimer(identifier){
  return {
    type: ACTIVATE_TIMER,
    identifier
  }
}

/**
 * @param {number} identifier
 */

export function deactivateTimer(identifier){
  return {
    type: DEACTIVATE_TIMER,
    identifier
  }
}

/**
 * 
 * @param {Array} clocks 
 */

export function addClocks(clocks){
  return {
    type: ADD_CLOCKS,
    clocks
  }
}

export function decrementCounter(){
  return {
    type: DECREMENT_COUNTER
  }
}

/**
 * @param {number} identifier
 */

export function resetCounter(identifier){
  return {
    type: RESET_COUNTER,
    identifier
  }
}

/**
 export * @param {Function} setter 
 */

export function setTimerToggler(setter){
  return {
    type: SET_TIMER_TOGGLER,
    setter
  }
}

export function toggleTimerDeleteList(){
  return {
    type: TOGGLE_TIMER_DELETE_LIST
  }
}

/**
 * @param {number} identifier
 */
export function toggleTimerCheck(identifier){
  return {
    type: TOGGLE_TIMER_CHECK,
    identifier
  }
}

export function deleteSelectedTimers(){
  return {
    type: DELETE_SELECTED_TIMERS,
  }
}
/**
 * @param {string} hours 
 * @param {string} minutes 
 * @param {string} seconds
 */
export function setPlaceholders(hours,minutes,seconds){
  return {
    type: SET_PLACEHOLDER,

  }
}
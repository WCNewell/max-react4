import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1})
            // const newState = Object.assign({}, state)
            // newState.counter = state.counter + 1
            // return newState
            // ^^Copy the old state, clone the old object in an immmutable way, but is technically a different object
            // All the properties of the old object but is a new object, import due to the way objects and array work in JS with primitive types and reference types
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1})
            // return {
            //     ...state,
            //     counter: state.counter - 1
                // ^^ an easier way of accomplishing the above is to disribute the old state using the spread operator ...
            // }
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.payload})
            
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.payload})
    }
    return state
}

export default reducer
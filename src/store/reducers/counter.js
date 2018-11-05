import * as actionTypes from '../actions'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state)
            newState.counter = state.counter + 1
            return newState
            // ^^Copy the old state, clone the old object in an immmutable way, but is technically a different object
            // All the properties of the old object but is a new object, import due to the way objects and array work in JS with primitive types and reference types
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
                // ^^ and easier way of accomplishing the above is to disribute the old state using the spread operator ...
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload
            }
    }
    return state
}

export default reducer
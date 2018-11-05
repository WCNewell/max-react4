import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
                // ^^concat returns a new array, which is the old array plus the new item, an immutable way to do this, i.e. .push would not work here
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2
            // const newArray = [...state.results]
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId)
            return {
                ...state,
                results: updatedArray
            }
            // ^^ delete elements immutably with filter
    }
    return state
}

export default reducer
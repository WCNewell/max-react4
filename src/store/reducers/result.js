import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(),value: action.result})
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
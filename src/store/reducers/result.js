import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElementId)
    return updateObject(state, { results: updatedArray })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.STORE_RESULT:
            // Example of changing the stored data below, multiplying the result by 2

            return updateObject(state, {results: state.results.concat({ id: new Date(),value: action.result * 2 })})
            
            // return {
            //     ...state,
            //     results: state.results.concat({id: new Date(),value: action.result * 2})
            //     // ^^concat returns a new array, which is the old array plus the new item, an immutable way to do this, i.e. .push would not work here
            // }

        case actionTypes.DELETE_RESULT:
            // const id = 2
            // const newArray = [...state.results]
            // newArray.splice(id, 1)

            // const updatedArray = state.results.filter(result => result.id !== action.resultElementId)
            // return updateObject(state, { results: updatedArray })
            
            // return {
            //     ...state,
            //     results: updatedArray
            // }
            // ^^ delete elements immutably with filter

            return deleteResult(state, action)
    }
    return state
}

export default reducer
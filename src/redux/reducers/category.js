import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    category: ''
}

export const saveCategory = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        category: action.category,
    }
}


export const HANDLERS = {
    [Types.SAVE_CATEGORY]: saveCategory,

}

export default createReducer(INITIAL_STATE, HANDLERS)
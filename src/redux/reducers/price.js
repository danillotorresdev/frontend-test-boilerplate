import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    isSaving: false,
    error: false,
    errorMessage: '',
    priceData: [],
    yearCode: ''

}

// vehicles reducers
export const getPriceRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

export const getPriceSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        priceData: action.price
    }
}

export const getPriceFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

export const receiveYearCode = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        yearCode: action.yearCode.yearCode
    }
}

export const HANDLERS = {
    [Types.GET_PRICE_REQUEST]: getPriceRequest,
    [Types.GET_PRICE_SUCCESS]: getPriceSuccess,
    [Types.GET_PRICE_FAILURE]: getPriceFailure,

    [Types.RECEIVE_YEAR_CODE]: receiveYearCode
}

export default createReducer(INITIAL_STATE, HANDLERS)
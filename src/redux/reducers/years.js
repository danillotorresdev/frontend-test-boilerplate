import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    isSaving: false,
    error: false,
    errorMessage: '',
    yearsData: [],
    vehicleCode: ''

}

// vehicles reducers
export const getYearsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

export const getYearsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        yearsData: action.years
    }
}

export const getYearsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

export const receiveVehicleCode = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        vehicleCode: action.vehicleCode.vehicleCode
    }
}
export const saveYearCode = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        yearCode: action.yearCode,
        saved: true
    }
}

export const HANDLERS = {
    [Types.GET_YEARS_REQUEST]: getYearsRequest,
    [Types.GET_YEARS_SUCCESS]: getYearsSuccess,
    [Types.GET_YEARS_FAILURE]: getYearsFailure,
    [Types.SAVE_YEAR_CODE]: saveYearCode,

    [Types.RECEIVE_VEHICLE_CODE]: receiveVehicleCode
}

export default createReducer(INITIAL_STATE, HANDLERS)
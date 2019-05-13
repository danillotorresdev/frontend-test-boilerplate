import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    isSaving: false,
    error: false,
    errorMessage: '',
    vehiclesData: [],
    brandCode: '',
    vehicleCode: ''

}

// vehicles reducers
export const getVehiclesRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

export const getVehiclesSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        vehiclesData: action.vehicles
    }
}

export const getVehiclesFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

export const receiveBrandCode = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        brandCode: action.brandCode.brandCode
    }
}

export const saveVehicleCode = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        vehicleCode: action.vehicleCode,
        saved: true
    }
}

export const HANDLERS = {
    [Types.GET_VEHICLES_REQUEST]: getVehiclesRequest,
    [Types.GET_VEHICLES_SUCCESS]: getVehiclesSuccess,
    [Types.GET_VEHICLES_FAILURE]: getVehiclesFailure,

    [Types.SAVE_VEHICLE_CODE]: saveVehicleCode,

    [Types.RECEIVE_BRAND_CODE]: receiveBrandCode
}

export default createReducer(INITIAL_STATE, HANDLERS)
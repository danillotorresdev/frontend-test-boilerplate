import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    isSaving: false,
    category: '',
    error: false,
    errorMessage: '',
    data: [],
    brandCode: '',
    step: 0,
}

export const getBrandsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

export const getBrandsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.brands
    }
}

export const getBrandsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

export const saveBrandCodeSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        brandCode: action.brandCode.brandCode,
        saved: true,
        step: state.step + 1
    }
}
export const changeStep = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        step: action.step.step
    }
}
export const receiveCategory = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        category: action.category.category
    }
}

export const HANDLERS = {
    [Types.GET_BRANDS_REQUEST]: getBrandsRequest,
    [Types.GET_BRANDS_SUCCESS]: getBrandsSuccess,
    [Types.GET_BRANDS_FAILURE]: getBrandsFailure,
    [Types.SAVE_BRAND_CODE_SUCCESS]: saveBrandCodeSuccess,
    [Types.CHANGE_STEP]: changeStep

}

export default createReducer(INITIAL_STATE, HANDLERS)
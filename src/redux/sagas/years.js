import axios from 'axios'
import ActionCreators from '../actionCreators'
import { put, select } from 'redux-saga/effects'

export function* getYears(action) {
    const state = yield select();
    const category = yield state.category.category.category
    const modelo = yield state.brands.brandCode
    const ano = yield state.years.vehicleCode
    const years = yield axios.get(`https://parallelum.com.br/fipe/api/v1/${category}/marcas/${modelo}/modelos/${ano}/anos`)
    yield put(ActionCreators.getYearsSuccess(years.data))
}
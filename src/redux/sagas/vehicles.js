import axios from 'axios'
import ActionCreators from '../actionCreators'
import { put, select } from 'redux-saga/effects'



export function* getVehicles(action) {
    const state = yield select();
    const category = yield state.category.category.category
    const modelo = yield state.brands.brandCode
    const vehicles = yield axios.get(`https://parallelum.com.br/fipe/api/v1/${category}/marcas/${modelo}/modelos`)
    yield put(ActionCreators.getVehiclesSuccess(vehicles.data.modelos))
}
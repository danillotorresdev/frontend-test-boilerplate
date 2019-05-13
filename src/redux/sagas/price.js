import axios from 'axios'
import ActionCreators from '../actionCreators'
import { put, select } from 'redux-saga/effects'

export function* getPrice(action) {
    const state = yield select();
    const category = yield state.category.category.category
    const modelo = yield state.brands.brandCode
    const ano = yield state.years.vehicleCode
    const precoCod = yield state.price.yearCode
    const preco = yield axios.get(`https://parallelum.com.br/fipe/api/v1/${category}/marcas/${modelo}/modelos/${ano}/anos/${precoCod}`)
    yield put(ActionCreators.getPriceSuccess(preco.data))
}
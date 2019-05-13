import axios from 'axios'
import ActionCreators from '../actionCreators'
import { put, select } from 'redux-saga/effects'



export function* getBrands(action) {
    const state = yield select();
    const category = yield state.category.category.category
    const brands = yield axios.get(`https://parallelum.com.br/fipe/api/v1/${category}/marcas`)
    yield put(ActionCreators.getBrandsSuccess(brands.data ))
}

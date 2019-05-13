import { takeLatest, all, put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import ActionCreators from '../actionCreators'

import { getBrands } from './brands'
import { getVehicles } from './vehicles'
import { getYears } from './years'
import { getPrice } from './price'

export default function* rootSaga() {
    yield all([
        takeLatest(Types.GET_BRANDS_REQUEST, getBrands),
        takeLatest(Types.GET_VEHICLES_REQUEST, getVehicles),
        takeLatest(Types.GET_YEARS_REQUEST, getYears),
        takeLatest(Types.GET_PRICE_REQUEST, getPrice),
    ])
}
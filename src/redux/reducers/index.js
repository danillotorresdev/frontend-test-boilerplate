
import {combineReducers} from 'redux'
import category from './category'
import brands from './brands'
import vehicles from './vehicles'
import years from './years'
import price from './price'


const rootReducer = combineReducers({
    category,
    brands,
    vehicles,
    years,
    price
})

export default rootReducer
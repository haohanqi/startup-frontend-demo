import { combineReducers } from 'redux-immutable';
import {reducer as productReducer}from '../Pages/Product-page/store'
import {reducer as productDetailReducer} from '../Pages/ProductDetail-page/store'

const reducer = combineReducers({
   product:productReducer,
   productDetail: productDetailReducer,
})

export default reducer 
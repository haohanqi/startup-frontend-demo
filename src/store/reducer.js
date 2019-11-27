import { combineReducers } from 'redux-immutable';
import {reducer as productReducer}from '../Pages/Product-page/store'
import {reducer as productDetailReducer} from '../Pages/ProductDetail-page/store'
import {reducer as aboutReducer} from '../Pages/About-page/store'

// productReducer is used in Product Page, productDetailReducer is used in ProductDetail page
const reducer = combineReducers({
   product:productReducer,
   productDetail: productDetailReducer,
   aboutPage:aboutReducer
})

export default reducer 
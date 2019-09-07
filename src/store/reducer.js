import { combineReducers } from 'redux-immutable';
import {reducer as productReducer}from '../Pages/Product-page/store'

const reducer = combineReducers({
   product:productReducer
})

export default reducer 
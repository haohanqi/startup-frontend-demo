import * as actionType from './actionType'
import {fromJS} from 'immutable'

const defaultState=fromJS({
      useridFocus:false,
      userInfo:{},
      productInfo:{}
})

export default (state=defaultState,action)=>{
    if(action.type===actionType.CHANGE_FOCUS){
        return state.set('useridFocus',action.data)
    }

    if(action.type===actionType.SET_UERINFO){
        return state.set('userInfo',action.data)
    }

    if(action.type===actionType.SET_PRODUCTINFO){
        return state.set('productInfo',action.data)
    }
    return state

}
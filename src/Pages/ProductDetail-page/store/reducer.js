import * as actionType from './actionType'
import {fromJS} from 'immutable'

const defaultState=fromJS({
      useridFocus:false,
})

export default (state=defaultState,action)=>{
    if(action.type===actionType.CHANGE_FOCUS){
        return state.set('useridFocus',action.data)
    }
    return state

}
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState=fromJS({
    animationActive:false,
    timeLineShowUp:false,
})

 export default(state=defaultState,action)=>{
    if(action.type===actionTypes.CHANGE_ANIMATION){
        return state.set('animationActive',action.data)
    }

    if(action.type===actionTypes.RENDER_TIMELINE){
        return state.set('timeLineShowUp',action.data)
    }

    // if(action.type===actionTypes.CHANGE_FORMINPUT){
    //     return state.set('formInputFocus',action.data)
    // }
    return state

 }
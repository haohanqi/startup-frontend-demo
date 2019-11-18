import * as actionTypes from './actionType'
import {fromJS} from 'immutable'
const defaultState=fromJS({
    showDisclaim:false,
    showCata:false,
    target:" ",
    gold:[ ],
    silver:[ ],
    copper:[ ],
    zinc:[ ]
})

export default(state=defaultState,action)=>{

   if(action.type===actionTypes.SET_TARGET){
     return state.set('target',action.target)
   }

    if(action.type===actionTypes.SET_GOLDINFO){
      return state.set('gold',action.data)
    }

    if(action.type===actionTypes.SET_SILVERINFO){
      return state.set('silver',action.data)
    }

    if(action.type===actionTypes.SET_COPPERINFO){
      return state.set('copper',action.data)
    }

    if(action.type===actionTypes.SET_ZINCINFO){
      return state.set('zinc',action.data)
    }

    if(action.type===actionTypes.SET_DISCLAIM){
      return state.set('showDisclaim',action.data)
    }

    if(action.type===actionTypes.SET_CATA){
      return state.set('showCata',action.data)
    }

    return state;

}
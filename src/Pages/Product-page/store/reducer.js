import * as actionTypes from './actionType'
import {fromJS} from 'immutable'
const defaultState=fromJS({

    target:" ",
    gold:[],
    silver:[],
    copper:[],
    zinc:[]
  
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

    return state;

}
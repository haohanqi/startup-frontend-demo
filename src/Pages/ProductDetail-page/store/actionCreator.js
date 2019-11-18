import * as actionType from './actionType'
import axios from 'axios'

//set userId focused, if focused show up user info else not showing. 
export const setuseridFocused=(data)=>{
    return {
        type: actionType.CHANGE_FOCUS,
        data,
    }
}

 
//user info get and set--------------------------------------------------------------

//get user info from api call 
export const getUserInfo = (id) =>{
    console.log(id)
   return (dispatch)=>{
    axios.get('/api/getUserInfo.json').then((res)=>{
       // console.log(res.data.data)
        dispatch(setUserInfo(res.data.data))
    }).catch((error)=>{console.log(error)})
   }
}

//set user info 
const setUserInfo = (data)=>{
    return {
        type:actionType.SET_UERINFO,
        data,
    }
}


//product info get and set--------------------------------------------------------------

//set product info 
const setProductInfo = (data) =>{
    return {
        type:actionType.SET_PRODUCTINFO,
        data,
    }
}

//get product info 
export const getProductInfo =(target,id)=>{
    console.log('/'+target+'/'+id)
    return (dispatch) =>{
        axios.get('/api/getProductInfo.json').then((res)=>{
            console.log(res.data.data)
            dispatch(setProductInfo(res.data.data))
        }).catch(error=>{console.log(error)})
    }
}
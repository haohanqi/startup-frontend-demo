import * as actionType from './actionType'
import axios from 'axios'

export const setuseridFocused=(data)=>{
    return {
        type: actionType.CHANGE_FOCUS,
        data,
    }
}

 const setUserInfo = (data)=>{
    return {
        type:actionType.SET_UERINFO,
        data,
    }
}

export const getUserInfo = () =>{
   return (dispatch)=>{
    axios.get('/api/getUserInfo.json').then((res)=>{
        console.log(res.data.data)
        dispatch(setUserInfo(res.data.data))
    }).catch((error)=>{console.log(error)})
   }
}


const setProductInfo = (data) =>{
    return {
        type:actionType.SET_PRODUCTINFO,
        data,
    }
}

export const getProductInfo =()=>{
    return (dispatch) =>{
        axios.get('/api/getProductInfo.json').then((res)=>{
            console.log(res.data.data)
            dispatch(setProductInfo(res.data.data))
        }).catch(error=>{console.log(error)})
    }
}
import axios from 'axios'
import * as actionTypes from './actionType'

// set data into different catas according to target value. 
const setInfo = (data, target) => {
    if (target === "Gold") {
        return {
            type: actionTypes.SET_GOLDINFO,
            data
        }
    }
    if (target === "Silver") {
        return {
            type: actionTypes.SET_SILVERINFO,
            data
        }
    }
    if (target === "Copper") {
        return {
            type: actionTypes.SET_COPPERINFO,
            data
        }
    }
    if (target === "Zinc") {
        return {
            type: actionTypes.SET_ZINCINFO,
            data
        }
    }
}

//common async get function to get differnt catas material according to target
const asyncGet = (url, target, dispatch) => {
    setTimeout(
        ()=>{axios.get(url).then(
            (res) => {
                const data = res.data.data
                if(data){
                    dispatch(setInfo(data, target))
                    dispatch(setLoading(false))
                }
                
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )},2000)
    

}


//according to different target value to request different api
export const getInfo = (target) => {
    return (dispatch) => {

        if (target === "Gold") {
            asyncGet('/api/getGoldInfo.json', target, dispatch)
        }

        if (target === 'Silver') {
            asyncGet('/api/getSilverInfo.json', target, dispatch)
        }

        if (target === "Copper") {
            asyncGet('/api/getCopperInfo.json', target, dispatch)
        }

        if (target === 'Zinc') {
            asyncGet('/api/getZincInfo.json', target, dispatch)
        }

    }

}

// set target value, according to different target value show different cata list 
export const setTarget = (target) => {
    return {
        type: actionTypes.SET_TARGET,
        target
    }
}

// set disclaim status, according to disclaim status to show up or hidden diclaim 
export const setDisclaim = (data) => {
    return {
        type: actionTypes.SET_DISCLAIM,
        data
    }
}

// set cata status, according to cata status to show up or hidden cata 
export const setCata = (data) => {
    return {
        type: actionTypes.SET_CATA,
        data
    }
}

export const setLoading=(data)=>{
    return {
        type:actionTypes.SET_LOADING,
        data
    }
}
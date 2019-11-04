import axios from 'axios'
import * as actionTypes from './actionType'


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

const asyncGet = (url, target, dispatch) => {
    axios.get(url).then(
        (res) => {
            const data = res.data.data
            //console.log(data)
            dispatch(setInfo(data, target))
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )

}

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


export const setTarget = (target) => {
    return {
        type: actionTypes.SET_TARGET,
        target
    }
}
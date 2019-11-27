
import * as actionTypes from './actionTypes'

export const changeAnimationStatus = (data)=>{
    return {
        type: actionTypes.CHANGE_ANIMATION,
        data
    }
}

export const renderTimeLine = (data) =>{
    return {
        type: actionTypes.RENDER_TIMELINE,
        data
    }
}

// export const changeFormInputStatus = (data)=>{
//     return {
//         type: actionTypes.CHANGE_FORMINPUT,
//         data
//     }
// }
import * as actionType from './actionType'

export const setuseridFocused=(data)=>{
    return {
        type: actionType.CHANGE_FOCUS,
        data
    }
}
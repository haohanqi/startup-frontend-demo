import axios from 'axios'
import  * as actionTypes  from './actionType'


const setInfo =(data,target)=>{
    if(target==="Gold"){
        return {
            type:actionTypes.SET_GOLDINFO,
            data
        }
    }
    if(target==="Silver"){
        return {
            type:actionTypes.SET_SILVERINFO,
            data
        }
    }
    if(target==="Copper"){
        return {
            type:actionTypes.SET_COPPERINFO,
            data
        }
    }
    if(target==="Zinc"){
        return {
            type:actionTypes.SET_ZINCINFO,
            data
        }
    }   
}

/* const asyncGet=(url,dispatch)=>{
    axios.get(url).then(
        (res)=>{
            const data =res.data.data
            const target="Gold"
            console.log(data)
            dispatch(setInfo(data,target))
        }
     ).catch(
         (error)=>{
             console.log(error)
         }
     )

} */

export const getGoldInfo =()=>{
   return (dispatch)=>{
       axios.get('/api/getGoldInfo.json').then(
          (res)=>{
              const data =res.data.data
              const target="Gold"
              console.log(data)
              dispatch(setInfo(data,target))
          }
       ).catch(
           (error)=>{
               console.log(error)
           }
       )
   }

}

export const getSilverInfo =()=>{
    return (dispatch)=>{
        axios.get('/api/getSilverInfo.json').then(
           (res)=>{
               const data =res.data.data
               const target="Gold"
               console.log(data)
               dispatch(setInfo(data,target))
           }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
 
 }

export const setTarget=(target)=>{
    return{
        type: actionTypes.SET_TARGET,
        target
    }
}
import {DELETE_TODO,CLEAR_ALL,ADD_TODO} from '../constants/types';

export const dataFrom = (data) => ( dispatch) => {
 
    dispatch({
        type:ADD_TODO,
        payload: data
    })


}

export const deletedataRedux = (id) => ( dispatch) => {
   
    dispatch({
        type:DELETE_TODO,
        payload: id
    })

}
export const cleardataRedux = () => ( dispatch) => {
   console.log("clear All")
    dispatch({
        type:CLEAR_ALL,
        payload: ''
    })

}
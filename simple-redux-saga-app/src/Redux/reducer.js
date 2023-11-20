import { INCREMENT, DECREMENT } from "./action"

const initialState = {
    value: 1
}

export const countReducer = (state = initialState, action) => {
    switch(action.type)
    {  
        case INCREMENT:{
            return{...state, value: state.value + action.payload}
        }
            
        case DECREMENT:{
            return{...state,value: state.value - action.payload}
        }
        default:
            return state;
    }
}
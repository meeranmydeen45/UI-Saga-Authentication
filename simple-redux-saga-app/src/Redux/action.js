export const INCREMENT = 'Add'
export const DECREMENT = 'Minus'
export const GETVALUE = 'GetValue'
export const GETMINUSVALUE = 'GetMinus'

//const delay = (m) => new Promise(res => setTimeout(res, m))

export const Increment = (payload) => ({type: INCREMENT, payload})

export const Decrement = (payload) =>
{
    return{
        type: DECREMENT,
        payload
    }
}

export const GetValue = () =>
{
    return{
        type: GETVALUE,
    }
}

export const GetMinusValue = () =>
{
    return{
        type: GETMINUSVALUE,
    }
}
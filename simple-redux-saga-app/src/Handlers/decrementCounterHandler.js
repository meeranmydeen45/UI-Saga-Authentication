import { call, put } from "redux-saga/effects";
import { decrementCounter } from "../Request/decrementCounter";
import { Decrement } from "../Redux/action";

const delay = (m) => new Promise(res => setTimeout(res, m));

export function* deccrementHandlerAsync () {
try{
       const res = yield call(decrementCounter);
       yield delay(2000)
       yield put(Decrement(res));
}
catch(e)
{
    console.log('Error Occured')
    console.log(e.Message)
}
}
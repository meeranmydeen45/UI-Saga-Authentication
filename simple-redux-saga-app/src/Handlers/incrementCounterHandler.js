import { call, put } from "redux-saga/effects";
import { incrementCounter } from "../Request/incrementCounter";
import { Increment } from "../Redux/action";

const delay = (m) => new Promise(res => setTimeout(res, m));

export function* incrementHandlerAsync () {
try{
       const res = yield call(incrementCounter);
       yield delay(3000)
       yield put(Increment(res));
}
catch(e)
{
    console.log('Error Occured')
    console.log(e.Message)
}
}
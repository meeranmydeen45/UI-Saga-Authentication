import { takeEvery, all } from 'redux-saga/effects'
import { GETVALUE, GETMINUSVALUE} from '../Redux/action';
import { incrementHandlerAsync } from '../Handlers/incrementCounterHandler';
import { deccrementHandlerAsync } from '../Handlers/decrementCounterHandler';

export function* watchCounter()
{
    yield takeEvery(GETVALUE, incrementHandlerAsync);
    yield takeEvery(GETMINUSVALUE, deccrementHandlerAsync);
}


export default function* rootSaga()
{
    yield all([watchCounter()])
}
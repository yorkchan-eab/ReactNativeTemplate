import { takeEvery, call, take, select, fork, put } from 'redux-saga/effects'
import {
    COUNTER_ASYNC_PLUS,
    COUNTER_ASYNC_PLUS_DONE,
    CounterAsyncPlus
} from '../actions';
import { TAppState, TTemplateState } from '../../models';
import { secure, safe } from './base';

async function simulateAsyncTask(duration: number) {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

function* counterAsyncPlus(action: CounterAsyncPlus) {
    yield call(simulateAsyncTask, 1000);
    if(action?.payload?.testError) {
        //@ts-ignore
        aaa = 'aaa';
    }
    yield put({ type: COUNTER_ASYNC_PLUS_DONE })
}

function* watchCounterAsyncPlus() {
    yield takeEvery(COUNTER_ASYNC_PLUS, safe(true, counterAsyncPlus))
}
export default [
    fork(watchCounterAsyncPlus),
]
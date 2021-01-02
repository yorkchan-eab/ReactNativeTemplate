import { put, call } from 'redux-saga/effects'
import {
    SHOW_LOADING,
    HIDE_LOADING,
} from '../actions';

export function* secure(func: () => void, showLoading = false) {
    try {
        if (showLoading) {
            yield put({ type: SHOW_LOADING });
        }
        yield func();
    } catch (error) {
        console.error(error);
        // todo popup toast
    } finally {
        if (showLoading) {
            yield put({ type: HIDE_LOADING });
        }
    }
}

export const safe = (showLoading: boolean, saga: any, ...args: any) => function* (action: any) {
    try {
        if (showLoading) {
            yield put({ type: SHOW_LOADING });
        }
        yield call(saga, ...args, action);
    } catch (error) {
        console.error(error);
        // todo popup toast
    } finally {
        if (showLoading) {
            yield put({ type: HIDE_LOADING });
        }
    }
}
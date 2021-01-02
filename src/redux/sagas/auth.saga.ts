import { takeEvery, call, take, select, fork, put } from 'redux-saga/effects'
import {
    LOGIN,
    LOGIN_DONE,
    Login,
    LOGOUT,
    LOGOUT_DONE,
} from '../actions';
import { TAppState, TAuthState } from '../models';


export const getAuth = (state: TAppState) => state.auth;


function* login(action: Login) {
    
}

function* logout(action?: any) {
    
}

function* watchLogin() {
    yield takeEvery(LOGIN, login)
}

function* watchLogout() {
    yield takeEvery(LOGOUT, logout)
}


export default [
    fork(watchLogin),
    fork(watchLogout),
]
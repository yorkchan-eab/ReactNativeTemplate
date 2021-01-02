import { combineReducers } from 'redux'
import { persistReducer, createTransform } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import { TAppState, ActionBase, TAuthState } from '../models';
import { SHOW_LOADING, HIDE_LOADING, COUNTER_ASYNC_PLUS, COUNTER_ASYNC_PLUS_DONE } from '../actions';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import auth from "./auth.reducer";
import template from "./template.reducer";

const loading = (state = false, action: ActionBase) => {
    switch (action.type) {
        // case COUNTER_ASYNC_PLUS:
        case SHOW_LOADING:
            return true
        // case COUNTER_ASYNC_PLUS_DONE:
        case HIDE_LOADING:
            return false
        default:
            return state;
    }
}

const rootReducer = combineReducers<TAppState>({
    loading,
    auth,
    template,
});

// export default rootReducer;
export default persistReducer({
    key: 'root',
    storage:AsyncStorage,
}, rootReducer)
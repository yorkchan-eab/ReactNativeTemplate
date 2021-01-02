import { createStore, applyMiddleware, AnyAction, CombinedState, Store } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import { TAppState } from '../models';
import { hideLoading } from '../actions';


let store: Store<CombinedState<TAppState>, AnyAction> & {
  dispatch: {};
};
const logger = createLogger({ collapsed: true });
const sagaMiddleware = createSagaMiddleware({
  onError: (error, errorInfo) => {
    console.error('saga Middleware onError', error, errorInfo);
    store.dispatch(hideLoading());
  }
});
store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    sagaMiddleware,
  )
)
//@ts-ignore
store.sagaTask = sagaMiddleware.run(rootSaga)
const persistor = persistStore(store)
export { store, persistor }
export default store;


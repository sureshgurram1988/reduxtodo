import {legacy_createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './Reducers/index.js';

const middlewares = [thunk];

const store = legacy_createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
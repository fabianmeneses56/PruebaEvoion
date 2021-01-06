import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//app-reducers
import apiReducer from './apiReducer'


const mainReducer = combineReducers({
    Api: apiReducer
});


export default createStore(
    mainReducer,
    applyMiddleware(thunk)
);
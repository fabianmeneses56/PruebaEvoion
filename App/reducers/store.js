import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//app-reducers
import apiReducer from './apiReducer'
import cartReducer from './cartReducer'


const mainReducer = combineReducers({
    Api: apiReducer,
    Cart:cartReducer
});


export default createStore(
    mainReducer,
    applyMiddleware(thunk)
);
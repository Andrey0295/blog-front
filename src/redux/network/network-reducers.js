import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import networkActions from './network-actions';



const networkError = createReducer(false, {
    [networkActions.showNetworkErrorComponent]: () => true,
    [networkActions.hideNetworkErrorComponent]: ()=>false,


})


export default combineReducers({
    networkError,
})

/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';



const showNetworkErrorComponent = createAction('network/enableNetworkErrorComponent')
const hideNetworkErrorComponent = createAction('network/disableNetworkErrorComponent')


export default {
    showNetworkErrorComponent,
    hideNetworkErrorComponent
}
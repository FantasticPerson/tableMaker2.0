import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import tool from './tool'

const reducer = combineReducers({
    tool
})

export default reducer
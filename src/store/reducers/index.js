import { combineReducers } from 'redux';

import foodsReducer from './foodsReducer';
import daysWorkedReducer from './daysWorkedReducer';
import userPrefDataReducer from './userPrefDataReducer';

const rootReducer = combineReducers({
    foodsReducer: foodsReducer,
    daysWorkedReducer: daysWorkedReducer,
    userPrefDataReducer: userPrefDataReducer
})


export default rootReducer;
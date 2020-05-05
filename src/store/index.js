import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';


import rootReducer from './reducers/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    /*whitelist: [
      'foodsReducer',
      'daysWorkedReducer'
    ],*/
    blacklist: ['foodsReducer'],
}

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(
        //createLogger(),
    ),
);

let persistor = persistStore(store);

export {
    store,
    persistor,
};

//const store = createStore(foodsReducer)
//export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import ciudadesReducer from './itinerarys/ciudades.reducers';
import errorReducer from './users/errorReducer';
import authReducer from './users/authReducer';

const reducers = combineReducers({
    ciudades: ciudadesReducer,
    error: errorReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

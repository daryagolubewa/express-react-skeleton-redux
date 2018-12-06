import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './app-reducer';
import userReducer from './user-reducer';
import userLogin from './login-reducer';
import trueLoginReducer from './true-login-reducer';

const reducers = history => combineReducers({
    router: connectRouter(history),
    app: appReducer,
    user: userReducer,
    login: userLogin,
    trueLogin: trueLoginReducer,
});

export default reducers;

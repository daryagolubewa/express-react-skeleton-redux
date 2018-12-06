import { LOGIN_TYPES } from '../actions/true-login-action';

const initialState = {
    login: {},
    isFetching: false
};

export default function trueLoginReducer(state = initialState, {type, payload} ) {
    switch (type) {
        case LOGIN_TYPES.FETCH_LOGIN_START: {
            return {
                ...state,
                isFetching: true
            };
        }
        case LOGIN_TYPES.FETCH_LOGIN_SUCCESS: {
            return {
                name: payload.login,
                isFetching: false
            };
        }
        case LOGIN_TYPES.FETCH_LOGIN_ERROR: {
            return {
                ...state,
                isFetching: false
            };
        }
        default:
            return state;
    }
}

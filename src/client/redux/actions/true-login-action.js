export const LOGIN_TYPES = {
    FETCH_LOGIN_START: 'FETCH_LOGIN_START',
    FETCH_LOGIN_SUCCESS: 'FETCH_LOGIN_SUCCESS',
    FETCH_LOGIN_ERROR: 'FETCH_LOGIN_ERROR',
   // TRUE_LOGIN_USER: 'TRUE_LOGIN_USER'
};

export const fetchLoginStartAC = () => ({ type: LOGIN_TYPES.FETCH_LOGIN_START });

export const fetchLoginSuccessAC = login => ({
    type: LOGIN_TYPES.FETCH_LOGIN_SUCCESS,
    payload: {
        login
    }
});


export const fetchLoginErrorAC = () => ({ type: LOGIN_TYPES.FETCH_LOGIN_ERROR });
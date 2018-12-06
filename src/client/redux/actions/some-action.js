import {USER_TYPES} from "./user-actions";

export const SOME_TYPES = {
    FETCH_SOME_START: 'FETCH_SOME_START',
    FETCH_SOME_SUCCESS: 'FETCH_SOME_SUCCESS',
    FETCH_SOME_ERROR: 'FETCH_SOME_ERROR'
};

export const fetchSomeStartAC = () => ({
    type: USER_TYPES.FETCH_SOME_START
});


export const fetchSomeSucessAc = user => ({
    type: USER_TYPES.FETCH_SOME_SUCCESS,
    payload: {
        user
    }
});

export const fetchSomeErrorAc = () => ({ type: SOME_TYPES.FETCH_SOME_ERROR });


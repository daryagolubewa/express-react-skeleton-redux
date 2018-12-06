import { SOME_TYPES } from '../actions/some-action';

const initialState = {
    user: {},
    isFetching: false
};

export default function someReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SOME_TYPES.FETCH_SOME_START: {
            return {
                ...state,
                isFetching: true
            };
        }
        case SOME_TYPES.FETCH_SOME_SUCCESS: {
            return {
                user: payload.user,
                isFetching: false
            };
        }
        case SOME_TYPES.FETCH_SOME_ERROR: {
            return {
                ...state,
                isFetching: false
            };
        }
        default:
            return state;
    }
}

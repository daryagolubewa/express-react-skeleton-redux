const userLogin = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.user
            }
            default:
                return state
    }
};

export default userLogin;

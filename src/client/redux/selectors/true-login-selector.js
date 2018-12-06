export const selectLogin = state => {
    console.log(1111, state.trueLogin);
    return state.trueLogin;
}

export const selectIsLoginFetching = state => (state.login.isFetching);

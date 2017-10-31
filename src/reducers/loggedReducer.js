let defaultState = {
    logged_in: false,
};

export const loggedReducer = (state=defaultState, action) => {
    // eslint-disable-next-line
    switch (action.type){
        case 'UPDATE_LOGIN_STATUS':
            state = {
                ...state,
                logged_in: action.payload,
            }
    }
    return state;
}
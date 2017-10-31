let defaultState = {
    background_url: ''
}
export const backgroundReducer = (state=defaultState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'SET_BACKGROUND_URL':
            state = {
                ...state,
                background_url: action.payload
            };
            break;
    }
    return state;
}
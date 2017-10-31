let defaultState = {
    user_name: 'User',
    user_id: null,
    user_pref_time: 12,
    user_task: null
};

export const userReducer = (state = defaultState, action) => {
    // eslint-disable-next-line
    switch (action.type){
        case 'SET_USER_DATA':
            state = {
                ...state,
                user_data: action.payload
            };
            break;
        case 'SET_USER_NAME':
            state = {
                ...state,
                user_display_name: action.payload
            };
            break;
        case 'SET_USER_ID':
            state = {
                ...state,
                user_id: action.payload
            };
            break;
        case 'SET_USER_TIME':
            state = {
                ...state,
                user_pref_time: action.payload
            };
            break;
        case 'SET_USER_TASK':
            state = {
                ...state,
                user_task: action.payload
            };
            break;
    }
    return state;
}
let defaultState = {
        user_email: '',
        user_password: '',
        user_conf_password: '',
        display_login_modal: false,
        display_reg_mode: false,
        user_login_type: null,
        user_error_message: null
};
export const registrationReducer = (state = defaultState, action) => {
    // eslint-disable-next-line
    switch (action.type){
        case 'USER_SET_EMAIL':
            state = {
                ...state,
                user_email: action.payload
            };
            break;
        case 'USER_SET_PASSWORD': 
            state = {
                ...state, 
                user_password: action.payload
            };
            break;
        case 'USER_SET_CONF_PASSWORD':
            state = {
                ...state,
                user_conf_password: action.payload
            };
            break;
        case 'DISPLAY_LOGIN_MODAL':
            state = {
                ...state,
                display_login_modal: action.payload
            };
            break;
        case 'DISPLAY_REGISTER_MODE':
            state = {
                ...state,
                display_reg_mode: action.payload
                
            }
            break;
        case 'DISPLAY_LOGIN_TYPE':
            state = {
                ...state,
                user_login_type: action.payload
                
            }
            break;
        case 'SET_ERROR_MESSAGE':
            state = {
                ...state,
                user_error_message: action.payload  
            }
            break;
    }
    return state
}
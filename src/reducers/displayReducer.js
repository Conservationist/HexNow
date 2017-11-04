let defaultState = {
    display_login_modal: false,
    display_reg_mode: false,
    user_login_type: null
}

export const displayReducer = (state = defaultState, action) => {
    switch (action.type) {
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
    }
    return state;
}
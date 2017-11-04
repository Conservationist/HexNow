export const DisplayLoginModal = (bool) => {
    return {
        type: 'DISPLAY_LOGIN_MODAL',
        payload: bool
    }
};
export const SetRegistrationMode = (bool) => {
    return {
        type: 'DISPLAY_REGISTER_MODE',
        payload: bool
    }
};
export const SetUserLoginType = (loginType) => {
    return {
        type: 'DISPLAY_LOGIN_TYPE',
        payload: loginType
    }
};
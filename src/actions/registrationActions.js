import firebase from 'firebase';

export const SetUserEmail = (email) => {
    return {
        type: 'USER_SET_EMAIL',
        payload: email
    }
};
export const SetUserPassword = (passwd) => {
    return {
        type: 'USER_SET_PASSWORD',
        payload: passwd
    }
};
export const SetUserConfPassword = (passwd) => {
    return {
        type: 'USER_SET_CONF_PASSWORD',
        payload: passwd
    }
};
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
export const SetUserErrorMessage = (message) => {
    return {
        type: 'SET_ERROR_MESSAGE',
        payload: message
    }
};
export const LogUserIn = (email, password) => {
    return (dispatch, getState) => {
        let fba = firebase.auth();
        const user_id = getState().user.user_id;
        fba.createUserWithEmailAndPassword(email, password)
            .catch(e => {
                let errorMessage = e.message;
                if(errorMessage != null){
                    dispatch({
                        type: 'SET_ERROR_MESSAGE',
                        payload: errorMessage
                    });
                    return;
                }
            });
        fba.onAuthStateChanged(user =>{
            if(user){
                firebase.database().ref('users/' + user_id).set({
                    user_email: user.email,
                    user_name: null,
                    user_pref_time: 12,
                    
                });
                dispatch({
                    type: 'DISPLAY_LOGIN_MODAL',
                    payload: false
                });
                dispatch({
                    type: 'UPDATE_LOGIN_STATUS',
                    payload: true
                });
            }
        });
    }
}
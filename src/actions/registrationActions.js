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
        fba.signInWithEmailAndPassword(email, password)
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
export const RegisterUser = (email, password) => {
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
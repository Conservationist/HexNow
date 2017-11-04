import React from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';
import {SPAN, DIV} from './sign_in.style';
import Login from './login';
import Register from './register';
import {updateUserStatus} from '../../actions/loggedActions';
import {updateUserData} from '../../actions/userActions';
import {SetUserLoginType, DisplayLoginModal, SetRegistrationMode} from '../../actions/displayActions';

class SignIn extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.props.updateUserStatus(true);
                this.props.SetUserLoginType('Logout');
            } else {
                this.props.updateUserStatus(false);
                this.props.SetUserLoginType('Login');
            }
        });
    }
    handleClick(){
        if(this.props.status === false){
            this.props.DisplayLoginModal(true);
        } else {
            firebase.auth().signOut();
            this.props.DisplayLoginModal(false);
            this.props.updateUserStatus(false);
            this.props.updateUserData();
        }
    }
    handleLogin(email, password){
        let fba = firebase.auth();
        fba.signInWithEmailAndPassword(email, password)
            .catch(e => {
                let errorMessage = e.message;
                if(errorMessage != null){
                    // this.props.SetUserErrorMessage(errorMessage);
                    return;
                }
            });
        fba.onAuthStateChanged(user =>{
            if(user){
               this.props.DisplayLoginModal(false);
               this.props.updateUserStatus(true);
            }
        });
    }
    handleRegisterMode(register_display){
        this.props.SetRegistrationMode(register_display);
    }
    handleRegister(email, password){
        let fba = firebase.auth();
        fba.createUserWithEmailAndPassword(email, password)
            .catch(e => {
                let errorMessage = e.message;
                if(errorMessage != null){
                    // this.props.SetUserErrorMessage(errorMessage);
                    return;
                }
            });
        fba.onAuthStateChanged(user =>{
            if(user){
                firebase.database().ref('users/' + user.uid).set({
                    user_email: user.email,
                    user_name: null,
                    user_pref_time: 12,
                    
                });
                this.props.DisplayLoginModal(false);
                this.props.updateUserStatus(true);
            }
        });
    }
    render(){
        console.log(this.props.display.display_reg_mode);
        let Template = () => {
            if(this.props.display.display_reg_mode === false){
                return <Login/>
            } else {
                console.log('wtf');
                return <Register/>
            }
        }
        return(
            <DIV>
                <SPAN onClick={this.handleClick.bind(this)}>{this.props.display.user_login_type}</SPAN>
                <Template/>
            </DIV>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      status: state.logged_status.logged_in,
      display: state.display,
    }
  }
const mapDispatchToProps = (dispatch) => {
    return{
        DisplayLoginModal: (bool) => {
            dispatch(DisplayLoginModal(bool));
        },
        updateUserStatus: (status) => {
            dispatch(updateUserStatus(status));
        },
        SetRegistrationMode: (bool) => {
            dispatch(SetRegistrationMode(bool));
        },
        SetUserLoginType: (loginType) => {
            dispatch(SetUserLoginType(loginType));
        },
        updateUserData: () => {
            dispatch(updateUserData());
        }
        // SetUserErrorMessage: (message) => {
        //     dispatch(SetUserErrorMessage(message));
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
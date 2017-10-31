import React, { Component } from 'react';
import Modal from 'react-modal';
import {ModalStyles, H1, ContentDiv, CloseModal, RegisterText, RegisterLink, SignInButton} from './sign_in.style';
import {connect} from 'react-redux';
import {LogUserIn, DisplayLoginModal, SetUserEmail, SetUserPassword, SetRegistrationMode} from '../../actions/registrationActions';
import LoginInput from './login.input'
class Login extends Component {
    handleChange(e, val, name){
        console.log(e);
        if(name === "email"){
            return this.props.SetUserEmail(e)
        } else {
            return this.props.SetUserPassword(e)
        }
    }
    handleRegister(props){
        const register_display = true;
        this.props.registertoggle(register_display);
    }
    closeModal(e){
        this.props.DisplayLoginModal(false)
    }
    loginClick(e){
        e.preventDefault(e)
        this.props.LogUserIn(this.props.user_email, this.props.user_password);
    }
    render() {
        console.log(this.props.register.user_email);
        return (
            <Modal
            isOpen={this.props.register.display_login_modal}
            style={ModalStyles}>
                <H1>Login</H1>
                <RegisterText>New user? Register <RegisterLink onClick={this.handleRegister.bind(this)}>here</RegisterLink>.</RegisterText>
                <ContentDiv>
                    <form>
                        <LoginInput InputValue={this.handleChange.bind(this)}inputType={'email'} inputName={'email'} inputPlaceholder={'Email Adress'}/>
                        <br />
                        <LoginInput inputType={'password'} inputName={'password'} inputPlaceholder={'Password'}/>
                        <br />
                        <SignInButton onClick={this.loginClick.bind(this)}>Log in</SignInButton>
                        <br />
                        <p>{this.props.register.user_error_message}</p>
                    </form>
                </ContentDiv>
                <ContentDiv>
                <CloseModal onClick={this.closeModal.bind(this)}>Close</CloseModal>
                </ContentDiv> 
            </Modal>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      register: state.register
    }
  }
const mapDispatchToProps = (dispatch) => {
    return{
        DisplayLoginModal: (bool) => {
            dispatch(DisplayLoginModal(bool));
        },
        SetUserEmail: (email) => {
            dispatch(SetUserEmail(email));
        },
        SetUserPassword: (passwd) => {
            dispatch(SetUserPassword(passwd));
        },
        LogUserIn: (email, password) => {
            dispatch(LogUserIn(email, password));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
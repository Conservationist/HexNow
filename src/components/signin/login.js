import React, { Component } from 'react';
import Modal from 'react-modal';
import {ModalStyles, H1, ContentDiv, CloseModal, RegisterText, RegisterLink, SignInButton} from './sign_in.style';
import {connect} from 'react-redux';
import {LogUserIn, SetUserEmail, SetUserPassword} from '../../actions/registrationActions';
import {DisplayLoginModal, SetRegistrationMode} from '../../actions/displayActions';
import LoginInput from './login.input';
import {ModalInput} from './sign_in.style';

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
        this.props.SetRegistrationMode(register_display);
    }
    closeModal(e){
        this.props.DisplayLoginModal(false)
    }
    loginClick(e){
        e.preventDefault(e)
        console.log(this.props.register)
        this.props.LogUserIn(this.props.register.user_email, this.props.register.user_password);
    }
    handleChange(event){
        if(event.target.name === 'email'){
            this.props.SetUserEmail(event.target.value);
        } else {
            this.props.SetUserPassword(event.target.value);
        }
    }
    render() {
        console.log(this.props.register.user_email);
        return (
            <Modal
            isOpen={this.props.display.display_login_modal}
            style={ModalStyles}>
                <H1>Login</H1>
                <RegisterText>New user? Register <RegisterLink onClick={this.handleRegister.bind(this)}>here</RegisterLink>.</RegisterText>
                <ContentDiv>
                    <form>
                        <ModalInput name='email' placeholder='Email Adress' type='text' onChange={this.handleChange.bind(this)}/>
                        <br />
                        <ModalInput name='password' placeholder='Password' type='password' onChange={this.handleChange.bind(this)}/>
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
      register: state.register,
      display: state.display
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
        },
        SetRegistrationMode: (bool) => {
            dispatch(SetRegistrationMode(bool));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
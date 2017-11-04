import React, { Component } from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {ModalStyles, H1, ContentDiv, CloseModal, RegisterText, RegisterLink, ModalInput, SignInButton} from './sign_in.style';
import {LogUserIn, SetUserEmail, SetUserPassword, SetUserConfPassword, SetUserErrorMessage, RegisterUser} from '../../actions/registrationActions';
import {DisplayLoginModal, SetRegistrationMode} from '../../actions/displayActions';
class Register extends Component {   
    handleChange(e){
        if(e.target.name === "email"){
            return this.props.SetUserEmail(e.target.value)
        } else if (e.target.name === "password"){
            return this.props.SetUserPassword(e.target.value)
        } else {
            return this.props.SetUserConfPassword(e.target.value)
        }
    }
    closeModal(props){
        this.props.DisplayLoginModal(false),
        this.props.SetUserErrorMessage(''),
        this.props.SetRegistrationMode(false);
    }
    registerClick(e){
        e.preventDefault(e);
        if(this.props.register.user_password === this.props.register.user_conf_password){
            this.props.RegisterUser(this.props.register.user_email, this.props.register.user_password);
        } else {
            this.props.SetUserErrorMessage('Passwords do not match.')
        }
    }
    handleLogin(){
        this.props.SetRegistrationMode(false);
    }
    render() {
        return (
            <Modal
            isOpen={this.props.display.display_login_modal}
            style={ModalStyles}>
                <H1>Login</H1>
                <RegisterText>Existing user? Login <RegisterLink onClick={this.handleLogin.bind(this)}>here</RegisterLink>.</RegisterText>
                <ContentDiv>
                    <form>
                        <ModalInput placeholder="Email Adress"name="email" field="email" label="email" type="text" onChange={this.handleChange.bind(this)}/>
                        <br />
                        <ModalInput placeholder="Password"name="password" field="password" label="password" type="password" onChange={this.handleChange.bind(this)}/>
                        <br />
                        <ModalInput placeholder="Confirm Password"name="conf_password" field="password" label="password" type="password" onChange={this.handleChange.bind(this)}/>
                        <br />
                        <SignInButton onClick={this.registerClick.bind(this)}>Register</SignInButton>
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
    return {
        DisplayLoginModal: (bool) => {
            dispatch(DisplayLoginModal(bool));
        },
        SetUserEmail: (email) => {
            dispatch(SetUserEmail(email));
        },
        SetUserPassword: (passwd) => {
            dispatch(SetUserPassword(passwd));
        },
        SetUserConfPassword: (passwd) => {
            dispatch(SetUserConfPassword(passwd));
        },
        SetUserErrorMessage: (message) => {
            dispatch(SetUserErrorMessage(message));
        },
        SetRegistrationMode: (bool) => {
            dispatch(SetRegistrationMode(bool));
        },
        RegisterUser: (email, password) => {
            dispatch(RegisterUser(email, password));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
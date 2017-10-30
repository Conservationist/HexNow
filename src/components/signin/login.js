import React, { Component } from 'react';
import Modal from 'react-modal';
import {ModalStyles, H1, ContentDiv, CloseModal, RegisterText, RegisterLink, ModalInput, SignInButton} from './sign_in.style';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            modal_toggle: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount(props) {
        this.setState({modal_toggle: this.props.modal, status: this.props.errorMessage});
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    handleRegister(props){
        const register_display = true;
        this.props.registertoggle(register_display);
    }
    closeModal(e){
        this.setState({modal_toggle: false});
    }
    loginClick(e){
        e.preventDefault(e)
        this.props.login(this.state.email, this.state.password);
    }
    render() {
        return (
            <Modal
            isOpen={this.state.modal_toggle}
            style={ModalStyles}>
                <H1>Login</H1>
                <RegisterText>New user? Register <RegisterLink onClick={this.handleRegister}>here</RegisterLink>.</RegisterText>
                <ContentDiv>
                    <form>
                        <ModalInput value={this.state.email} placeholder="Email Adress"name="email" field="email" label="email" type="text" onChange={this.handleChange}/>
                        <br />
                        <ModalInput placeholder="Password"name="password" field="password" label="password" type="password" onChange={this.handleChange}/>
                        <br />
                        <SignInButton onClick={this.loginClick}>Log in</SignInButton>
                        <br />
                        <p>{this.state.status}</p>
                    </form>
                </ContentDiv>
                <ContentDiv>
                <CloseModal onClick={this.closeModal}>Close</CloseModal>
                </ContentDiv> 
            </Modal>
        );
    }
}

export default Login;
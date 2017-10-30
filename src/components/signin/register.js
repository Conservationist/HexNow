import React, { Component } from 'react';
import Modal from 'react-modal';
import {ModalStyles, H1, ContentDiv, CloseModal, RegisterText, RegisterLink, ModalInput, SignInButton} from './sign_in.style';
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            conf_password: '',
            status: '',
            modal_toggle: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.registerClick = this.registerClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    componentDidMount(props) {
        this.setState({modal_toggle: this.props.modal, status: this.props.errorMessage});
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    closeModal(e){
        this.setState({modal_toggle: false});
    }
    registerClick(e){
        e.preventDefault(e);
        if(this.state.password === this.state.conf_password){
            this.props.register(this.state.email, this.state.password);
        } else {
            this.setState({status: 'Passwords do not match.'})
        }

    }
    handleLogin(){
        const register_display = false;
        this.props.registertoggle(register_display);
    }
    render() {
        return (
            <Modal
            isOpen={this.state.modal_toggle}
            style={ModalStyles}>
                <H1>Login</H1>
                <RegisterText>Existing user? Login <RegisterLink onClick={this.handleLogin}>here</RegisterLink>.</RegisterText>
                <ContentDiv>
                    <form>
                        <ModalInput placeholder="Email Adress"name="email" field="email" label="email" type="text" onChange={this.handleChange}/>
                        <br />
                        <ModalInput placeholder="Password"name="password" field="password" label="password" type="password" onChange={this.handleChange}/>
                        <br />
                        <ModalInput placeholder="Confirm Password"name="conf_password" field="password" label="password" type="password" onChange={this.handleChange}/>
                        <br />
                        <SignInButton onClick={this.registerClick}>Register</SignInButton>
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

export default Register;
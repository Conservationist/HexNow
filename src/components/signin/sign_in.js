import React from 'react';
import {SPAN, DIV, ModalStyles, H1, ContentDiv, CloseModal} from './sign_in.style';
import Modal from 'react-modal';
import firebase from 'firebase';
class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            logged_in: false,
            email: '',
            password: '',
            modal_toggle: false,
            status: '',
            login_type: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.registerClick = this.registerClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentWillMount(){
        Modal.setAppElement('body');
    }
    componentWillReceiveProps(){
        this.setState({logged_in: this.props.loggedin})
        if(this.state.logged_in === true){
            this.setState({login_type: 'Logout'});
        } else {
            this.setState({login_type: 'Login'});
        }
    }
    handleClick(){     
        if(this.state.logged_in === false){
            this.setState({modal_toggle: true});
        } else {
            firebase.auth().signOut();
            this.setState({logged_in: false});
        }
    }
    loginClick(e){
        e.preventDefault(e);
        let fba = firebase.auth();
        fba.signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(e => {
                let errorMessage = e.message;
                console.log(errorMessage);
                if(errorMessage != null){
                    this.setState({status: errorMessage});
                    return;
                }
            });
        fba.onAuthStateChanged(user =>{
            if(user){
               this.setState({modal_toggle: false, logged_in: true});
            }
        });
    }
    registerClick(e){
        e.preventDefault(e);
        let fba = firebase.auth();
        fba.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(e => {
                let errorMessage = e.message;
                console.log(errorMessage);
                if(errorMessage != null){
                    this.setState({status: errorMessage});
                    return;
                }
            });
        fba.onAuthStateChanged(user =>{
            if(user){
                firebase.database().ref('users/' + user.uid).set({
                    user_email: user.email,
                    display_name: null,
                    pref_time: 12,
                    
                });
                this.setState({modal_toggle: false, logged_in: true});
            }
        });
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    closeModal(e){
        this.setState({modal_toggle: false});
    }
    render(){
        return(
            <DIV>
                <SPAN onClick={this.handleClick}>{this.state.login_type}</SPAN>
                <Modal
                isOpen={this.state.modal_toggle}
                style={ModalStyles}>
                    <H1>Login</H1>
                    <ContentDiv>
                        <form>
                            <p>Email</p>
                            <input name="email" field="email" label="email" type="text" onChange={this.handleChange}/>
                            <br />
                            <p>Password</p>
                            <input name="password" field="password" label="password" type="password" onChange={this.handleChange}/>
                            <br />
                            <button onClick={this.loginClick}>Login</button>
                            <button onClick={this.registerClick}>Register</button>
                            <br />
                            <p>{this.state.status}</p>
                        </form>
                    </ContentDiv>
                    <ContentDiv>
                    <CloseModal onClick={this.closeModal}>Close</CloseModal>
                    </ContentDiv> 
                </Modal>
            </DIV>
        )
    }
}
export default SignIn
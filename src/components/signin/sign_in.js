import React from 'react';
import {SPAN, DIV} from './sign_in.style';
import firebase from 'firebase';
import Login from './login';
import Register from './register';
class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            logged_in: false,
            email: '',
            password: '',
            modal_toggle: false,
            status: '',
            login_type: '',
            register_mode: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
            firebase.auth().onAuthStateChanged(user => {
                if(user) {
                    console.log('true');
                    this.setState({
                        logged_in: true,
                        login_type: 'Logout'
                    });
                } else {
                    this.setState({logged_in: false, login_type: 'Login'});
                }
            });
    }
    handleClick(){
        if(this.state.logged_in === false){
            this.setState({modal_toggle: true});
        } else {
            firebase.auth().signOut();
            this.setState({modal_toggle: false, logged_in: false});
   
        }
    }
    handleLogin(email, password){
        let fba = firebase.auth();
        fba.signInWithEmailAndPassword(email, password)
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
    handleRegisterMode(register_display){
        this.setState({register_mode: register_display});
    }
    handleRegister(email, password){
        let fba = firebase.auth();
        fba.createUserWithEmailAndPassword(email, password)
            .catch(e => {
                let errorMessage = e.message;
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
    render(){
        let Template = () => {
            if(this.state.register_mode === false){
                return <Login errorMessage={this.state.status} registertoggle={this.handleRegisterMode.bind(this)} login={this.handleLogin.bind(this)} modal={this.state.modal_toggle}/>
            } else {
                return <Register errorMessage={this.state.status} registertoggle={this.handleRegisterMode.bind(this)} modal={this.state.modal_toggle} register={this.handleRegister.bind(this)}/>
            }
        }
        return(
            <DIV>
                <SPAN onClick={this.handleClick}>{this.state.login_type}</SPAN>
                <Template/>
            </DIV>
        )
    }
}
export default SignIn
import React, { Component } from 'react';
import axios from 'axios';
import Background from './components/background/Background';
import Quote from './components/quote/quote';
import quotes from './quotes.json';
import CenterInfo from './components/center/centerinfo';
import SignIn from './components/signin/sign_in';
import firebase from 'firebase';
// LETS GO.

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: 'true',
      logged_in: null,
      userDisplay_name: null
    }
  }
  componentDidMount(){
    axios.get(`https://source.unsplash.com/1600x900/?ocean`)
      .then(res =>{
        let img = res.request.responseURL
        const rannum = Math.floor(Math.random() * 102)
        this.setState({loading:'false', ImageURL:img, QuoteBody: quotes.quotes[rannum].quote, QuoteAuthor: quotes.quotes[rannum].author})
      });
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({logged_in: true});
        let get_user_display_name = firebase.database().ref('users/' + user.uid + '/display_name');
        get_user_display_name.on('value', snapshot => {
          this.setState({userDisplay_name: snapshot.val()})
        })
      } else {
        return this.setState({logged_in: false, userDisplay_name: 'User'});
      }
    });
  }
  render() {
    console.log(this.state.logged_in);
    return (
      <div className="App">
        <Background img={this.state.ImageURL}/>
        <SignIn loggedin={this.state.logged_in}/>
        <CenterInfo name={this.state.userDisplay_name}/>
        <Quote quoteBody={this.state.QuoteBody} quoteAuthor={this.state.QuoteAuthor}/>
      </div>
    );
  }
}

export default Home;
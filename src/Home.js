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
      userDisplay_name: null,
      user_id: null,
      user_pref_time: 12,
      user_task: null
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({userDisplay_name: null})
        this.setState({logged_in: true, user_id: user.uid});
        let get_user_display_name = firebase.database().ref('users/' + user.uid + '/');
        // async function get_user_Data(user){
        //   const user_data = await user.on('value');
        //   return user_data;
        // }
        // console.log(get_user_Data(get_user_display_name));
        get_user_display_name.on('value', snapshot => {
          console.log(snapshot.val());
          let db_val = snapshot.val();
          if(db_val.display_name === undefined){
            this.setState({userDisplay_name: 'User'})
          } else {
            this.setState({
              user_task: db_val.day_task,
              userDisplay_name: db_val.display_name,
              user_pref_time: db_val.pref_time
            })
          }
        });
        } else {
        return this.setState({
          logged_in: false,
          userDisplay_name: 'User',
        });
        }
        
    });
    axios.get(`https://source.unsplash.com/1600x900/?coffee`)
      .then(res =>{
        let img = res.request.responseURL
        const rannum = Math.floor(Math.random() * 102)
        this.setState({loading:'false', ImageURL:img, QuoteBody: quotes.quotes[rannum].quote, QuoteAuthor: quotes.quotes[rannum].author})
      });
  }
  render() {
    console.log(this.state.user_pref_time)
    return (
      <div className="App">
        <Background img={this.state.ImageURL}/>
        <SignIn loggedin={this.state.logged_in}/>
        <CenterInfo userTask={this.state.user_task}userTime={this.state.user_pref_time} userInfo={this.state.user_id} loggedin={this.state.logged_in} userName={this.state.userDisplay_name}/>
        <Quote quoteBody={this.state.QuoteBody} quoteAuthor={this.state.QuoteAuthor}/>
      </div>
    );
  }
}

export default Home;
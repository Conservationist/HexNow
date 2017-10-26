import React, { Component } from 'react';
import axios from 'axios';
import Background from './components/background/Background';
import Quote from './components/quote/quote';
import quotes from './quotes.json';
import CenterInfo from './components/center/centerinfo';
import firebase from 'firebase';
// LETS GO.

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: 'true',
    }
  }
  componentWillMount(){
    let config = {
      apiKey: "AIzaSyCEiObiNI-GR9JIHGf_xNgbRrZkM3xvKgg",
      authDomain: "hexnow-2004d.firebaseapp.com",
      databaseURL: "https://hexnow-2004d.firebaseio.com/"
    };
    firebase.initializeApp(config);
  }
  componentDidMount(){
    axios.get(`https://source.unsplash.com/1600x900/?ocean`)
      .then(res =>{
        let img = res.request.responseURL
        const rannum = Math.floor(Math.random() * 102)
        this.setState({loading:'false', ImageURL:img, QuoteBody: quotes.quotes[rannum].quote, QuoteAuthor: quotes.quotes[rannum].author})
      });
  }
  render() {
    return (
      <div className="App">
        <Background img={this.state.ImageURL}/>
        <Quote quoteBody={this.state.QuoteBody} quoteAuthor={this.state.QuoteAuthor}/>
        <CenterInfo/>
      </div>
    );
  }
}

export default Home;
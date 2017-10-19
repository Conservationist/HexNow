import React, { Component } from 'react';
import axios from 'axios';
import Background from './components/background/Background';
import quotes from './quotes.json';
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: 'true',
    }
  }
  componentDidMount(){
    axios.get(`https://source.unsplash.com/1600x900/?coffee`)
      .then(res =>{
        let img = res.request.responseURL
        this.setState({loading:'false', ImageURL:img})
      });
      console.log(quotes);
      console.log(Math.floor(Math.random() * 102));
  }
  render() {
    console.log(this.state.quoteBody);
    return (
      <div className="App">
        <Background img={this.state.ImageURL}/>
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import Background from './components/background/Background';
import Quote from './components/quote/quote';
import CenterInfo from './components/center/centerinfo';
import SignIn from './components/signin/sign_in';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {updateUserStatus} from './actions/loggedActions';
import {UpdateUserId, updateUserDisplayName, updateUserDayTask} from './actions/userActions';
import {fetchBackgroundUrl} from './actions/backgroundActions';
// LETS GO.


class Home extends Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.props.updateUserStatus(true);
        this.props.UpdateUserId(user.uid);
        let get_user_data = firebase.database().ref('users/' + user.uid + '/');
        get_user_data.on('value', snap => {
          console.log(snap.val());
          this.props.updateUserDisplayName(snap.val().display_name),
          this.props.updateUserDayTask(snap.val().day_task)
        })
      }  
    });
    this.props.fetchBackgroundUrl()
  }
  render() {
    return (
      <div className="App">
        <Background img={this.props.background.background_url}/>
        <SignIn/>
        <CenterInfo/>
        <Quote/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    status: state.logged_status.logged_in,
    background: state.background
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserStatus: (status) => {
      dispatch(updateUserStatus(status));
    },
    updateUserDisplayName: (name) => {
      dispatch(updateUserDisplayName(name));
    },
    UpdateUserId: (id) => {
      dispatch(UpdateUserId(id));
    },
    fetchBackgroundUrl: () => {
      dispatch(fetchBackgroundUrl());
    },
    updateUserDayTask: (task) => {
      dispatch(updateUserDayTask(task));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
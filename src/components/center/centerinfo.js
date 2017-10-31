import React from 'react';
import CenterTime from './centertime';
import {H1, DIV} from './centerinfo.style';
import InputTrigger from './inputs/inputTrigger';
import {connect} from 'react-redux';

class CenterInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usr_name: null
        }
    }
    render(){
        return(
        <div>
            <DIV>
                <H1>The time is currently</H1>
                <CenterTime prefTime={this.props.user.user_pref_time}/>
                <H1>{this.props.user.user_name}.</H1>
            </DIV>
            <div>
                <InputTrigger userTask={this.props.user.user_task} userid={this.props.user.user_id} username={this.props.user.userDisplay_name} loggedin={this.props.status}/>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      user: state.user,
      status: state.logged_status.logged_in
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      
      }
    }
  export default connect(mapStateToProps, mapDispatchToProps)(CenterInfo);
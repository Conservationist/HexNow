import React from 'react';
import CenterTime from './centertime';
import {H1, DIV} from './centerinfo.style';
import InputTrigger from './inputs/inputTrigger';

class CenterInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usr_name: null
        }
    }
    componentWillReceiveProps(){
        this.setState({usr_name: this.props.userName})
    }
    render(){
        return(
        <div>
            <DIV>
                <H1>The time is currently</H1>
                <CenterTime prefTime={this.props.userTime}/>
                <H1>{this.props.userName}.</H1>
            </DIV>
            <div>
                <InputTrigger userTask={this.props.userTask}userid={this.props.userInfo} username={this.props.userName} loggedin={this.props.loggedin}/>
            </div>
        </div>
        )
    }
}
export default CenterInfo;
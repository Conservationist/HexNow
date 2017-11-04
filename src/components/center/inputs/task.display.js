import React, { Component } from 'react';
import {Fade} from '../../_themes/text.style';
import {DIV, H1} from './input.style';
import firebase from 'firebase';
class TaskDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            style: '',
        }
    }
    handleClick(){
        let user_id = this.props.userid;
        firebase.database().ref("users/" + user_id + '/day_task').remove();
    }
    handleComplete(){
        this.setState({style: 'line-through'})
    }
    render() {
        return (
            <DIV>
                <H1>This is your current task for the day.</H1>
                <br />
                <Fade>
                    <H1 onClick={this.handleComplete.bind(this)}>{this.props.task}</H1>
                </Fade>
                <br />
                <button onClick={this.handleClick.bind(this)}>delete curr task (placeholder)</button>
            </DIV>
        );
    }
}

export default TaskDisplay;
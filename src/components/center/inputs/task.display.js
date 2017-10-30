import React, { Component } from 'react';
import {Fade} from '../../_themes/text.style';
import {DIV, H1} from './input.style';
import firebase from 'firebase';
class TaskDisplay extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let user_id = this.props.userid;
        firebase.database().ref("users/" + user_id + '/day_task').remove();
    }
    render() {
        return (
            <DIV>
                <H1>This is your current task for the day.</H1>
                <br />
                <Fade>
                    <H1>{this.props.task}</H1>
                </Fade>
                <br />
                <button onClick={this.handleClick}>delete curr task (placeholder)</button>
            </DIV>
        );
    }
}

export default TaskDisplay;
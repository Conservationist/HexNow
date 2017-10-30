import React from 'react';
import {INPUT, Fade} from '../../_themes/text.style';
import {DIV, H1} from './input.style';
import firebase from 'firebase';

class TaskInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: null,
            new_task: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // componentWillReceiveProps() {
    //     this.setState({
    //         task: this.props.task
    //     });
    // }
    handleSubmit(e){
        e.preventDefault(e);
        let user_id = this.props.userid;
        let db_task = this.state.new_task;
        firebase.database().ref("users/" + user_id + '/').update({day_task: db_task});
    }
    handleChange(e){
        this.setState({
            new_task: e.target.value
        })
    }
    render(){
        return(
            <DIV>
                <H1>Set a task for the day.</H1>
                <br />
                <Fade>
                    <form onSubmit={this.handleSubmit}>
                        <INPUT type="text" onChange={this.handleChange}/>
                    </form>
                </Fade>
        </DIV>
        );
    }
}
export default TaskInput;
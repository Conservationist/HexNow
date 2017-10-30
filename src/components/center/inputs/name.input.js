import React from 'react';
import firebase from 'firebase';
import {INPUT, Fade} from '../../_themes/text.style';
import {DIV, H1} from './input.style'
class NameInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user_name: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault(e);
        let user_id = this.props.userid
        let displayname = this.state.user_name
        firebase.database().ref("users/" + user_id + '/').update({display_name: displayname});
    }
    handleChange(e){
        this.setState({
            user_name: e.target.value
        })
    }
    render(){
        console.log(this.state.user_name)
        return(
            <DIV on={this.state.visability}>
                <H1>Please enter a display name.</H1>
                <br />
                <Fade>
                <form onSubmit={this.handleSubmit}>
                    <INPUT type="text" onChange={this.handleChange}/>
                </form>
                </Fade>
            </DIV>  
        )
    }
}
export default NameInput;
import React from 'react';
import CenterTime from './centertime';
import {H1, DIV} from './centerinfo.style';
import firebase from 'firebase';


class CenterInfo extends React.Component {
    constructor(){
        super();
        this.state = {
            Name: "User"
        }
    }
    componentWillMount(){
        const db = firebase.database()
        let ref = db.ref('hex');
        ref.on('value', snap =>{
            this.setState({Name: snap.val()});
        })
    }
    render(){
        return(
        <DIV>
            <H1>The time is currently</H1>
            <CenterTime/>
            <H1>{this.state.Name}.</H1>
        </DIV>
        )
    }
}
export default CenterInfo;
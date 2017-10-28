import React from 'react';
import CenterTime from './centertime';
import {H1, DIV} from './centerinfo.style';

class CenterInfo extends React.Component {
    constructor(){
        super();
        this.state = {
            Name: " "
        }
    }
    componentDidMount(){
    }
    render(){
        return(
        <DIV>
            <H1>The time is currently</H1>
            <CenterTime/>
            <H1>{this.props.name}.</H1>
        </DIV>
        )
    }
}
export default CenterInfo;
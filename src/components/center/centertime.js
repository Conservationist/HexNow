import React from 'react';
import {H1} from './centertime.style';

class CenterTime extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Time: 0
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.timeUpdate(),
            1000
          );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    timeUpdate() {
        console.log();
        const date = new Date();
        let pref_time;
        if(this.props.prefTime === 24){
            pref_time = false;
        } else {
            pref_time = true;
        }
        let options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: pref_time
        }
        const timeString = date.toLocaleString('en-UK', options);
        this.setState({Time: timeString})
    }
    render(){
        return(
            <H1>{this.state.Time}</H1>
        )
    }
}
export default CenterTime;
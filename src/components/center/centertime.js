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
        const date = new Date();
        let options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
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
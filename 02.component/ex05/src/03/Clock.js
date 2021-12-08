import React, {Component} from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {
    constructor(){
        super(...arguments)
        let date = this.getCurrentClockTime()
        this.state = {
            hours : date.hours,
            minutes : date.minutes,
            seconds : date.seconds
        }
    }

    // componentDidMount(){
    //     setInterval(() => {
    //         this.setState(
    //             // this.getCurrentClockTime()
    //             {seconds : parseInt(this.state.seconds) + 1 }
    //         )
    //     }, 1000);
    // }
    
    // componentDidMount(){
    //     setInterval(() => {
    //         let date = this.getCurrentClockTime()
    //         this.setState(
    //             // this.getCurrentClockTime()
    //             {seconds : date.seconds}
    //         )
    //     }, 1000);
    // }

    // componentDidMount(){
    //     setInterval(() => {
    //         this.setState(
    //             this.getCurrentClockTime()
    //         )
    //     }, 1000);
    // }



    getCurrentClockTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return {
            hours : hours,
            minutes : minutes,
            seconds : seconds
        }    
    }



    render() {
        return (
            <div className="clock-field">
                <div>
                    <p className="hours">{this.state.hours}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{this.state.minutes}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{this.state.seconds}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="AmPm">
                    <div>
                        {/* <p className={this.props.session === 'am' ? 'on' : 'off'}>am</p> */}
                    </div>
                    <div>
                        {/* <p className={this.props.session === 'pm' ? 'on' : 'off'}>pm</p> */}
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount(){
        console.log(Clock, ComponentWillUnmount)
    }
}
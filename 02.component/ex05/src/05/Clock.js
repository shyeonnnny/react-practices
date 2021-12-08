import React, {useEffect , useState} from 'react';
import SevenSegmentLED from "./SevenSegmentLED";

import './assets/scss/Clock.scss';

export default function Clock() {
    const getCurrentClockTime = () => {
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

    const [click, setclick] = useState(getCurrentClockTime);


   useEffect(() => {
        setInterval(() =>{
            console.log('33333333333333333333')
            setclick(getCurrentClockTime());
        },1000);
   },[]);

    


    return (
        <div className={'clock-display'}>
            <h2>Clock</h2>
            <div className={'Clock'}>
                <SevenSegmentLED number={click.hours} colon={true}/>
                <SevenSegmentLED number={click.minutes} colon={true}/>
                <SevenSegmentLED number={click.seconds} colon={false}/>
                {/* <SessionAmPm session={hours > 12 ? 'pm' : 'am'}/> */}
            </div>
        </div>
    );
}
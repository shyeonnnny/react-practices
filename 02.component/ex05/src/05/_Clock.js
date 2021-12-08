import React, {useState, useEffect} from 'react';
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

    const [currentDate, setcurrentDate] = useState(getCurrentClockTime());
    const [test, setTest] = useState(0);

    // 에프터 렌더링
    useEffect(function(){
        setInterval(() => {
            console.log('dddddddddddd')
            setcurrentDate(getCurrentClockTime());
        },1000)
    },[])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setClock(getCurrentClockTime())
    //     },1000)
    // },[currentDate]) // currentDate를 안넣어줘도 똑같이 동작한다.

     // useEffect(() => {
    //     setTimeout(() => {
    //         setTest({})
    //         setClock(getCurrentClockTime())
    //     },1000)
    // },[currentDate]) // 조건에 currentDate가 변경될때만 호출한다고 했기때문에 setTest는 동작하지 않는다.
                        // 변경되지않기때문에~

    return (
        <div className={'clock-display'}>
            <h2>Clock</h2>
            <div className={'Clock'}>
                <SevenSegmentLED number={currentDate.hours} colon={true}/>
                <SevenSegmentLED number={currentDate.minutes} colon={true}/>
                <SevenSegmentLED number={currentDate.seconds} colon={false}/>
                {/* <SessionAmPm session={hours > 12 ? 'pm' : 'am'}/> */}
            </div>
        </div>
    );
}
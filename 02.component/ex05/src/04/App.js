import React, {useState, useEffect, Fragment} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [getCurrentClockTiem,setCurrentClock] = useState(getCurrentClockTiem());
    const [ticks, setTicks]  =useState(0);
    
    
    useEffect(() =>{
        setInterval(function(){
            setCurrentClock(getCurrentClockTiem());
            setTicks(ticks + 1);
        }, 1000);
    }, []);


    // useEffect(() =>{
    //     console.log("-----------------");
    //     setInterval(function(){
    //         setCurrentClock(getCurrentClockTiem());
    //         setTicks(tick+1);
    //     }, 1000);
    // }, [currentClockTime]);




    useEffect(() => {
        console.log("-----------------------");

    })

    return (
        <Fragment>
            <span>{ticks}</span>
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={state.hours}
                minutes={state.minutes}
                seconds={state.seconds}/>
        </Fragment>
    );
}
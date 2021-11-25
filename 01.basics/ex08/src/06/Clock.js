import React, { Fragment } from 'react';

export default function(){
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let session = 'AM';
    if(hours > 12){
        session = 'PM';
    }

    if(seconds < 10){
        seconds = '0' + seconds
    }

    if(minutes < 10){
        minutes = '0' + minutes
    }

    if(hours < 10){
        hours = '0' + hours
    }
    
    return (
        <div>
            {hours} : {minutes} : {seconds} {session}
        </div>
    )
}
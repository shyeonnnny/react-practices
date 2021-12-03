import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/Message.scss';


export default function Message({no, name, message, notifyDeleteMessage}) {
    return (
        <li className={styles.Message}>
            <strong>{name}</strong>
            <p>
                {/* {"A\nB\nC\n".split('\n').map((line, index) =>  {
                    if(index != 0){
                       return <span key={index}><br/>{line}</span>
                    }else {
                       return <span key={index}>{line}</span>
                    }
                })} */}

                {   // message가 null이 아니고 
                    message && message.split('\n').map((line, index) => index > 0 ?  
                        <span key={`${no}-${index}`}>
                            <br/>
                            {line}
                        </span> :
                        line)
                }
            </p>
            <strong/>
            <a onClick={ () => notifyDeleteMessage(no) }>삭제</a>
        </li>
    );
}

// 유효성검사 해주는 것
Message.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}
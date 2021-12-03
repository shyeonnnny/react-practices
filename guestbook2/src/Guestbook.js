import React, {useState} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import data from './assets/json/data.json';

export default function Guestbook() {
    const [messages, setMessages] = useState(data);

    const notifyMessage = {
        add: function(message){

        },
        delete: function(no) {
            message.filter(message =>)
            // console.log('메세지 상태에서 메세지 삭제: ');
        }
    }

    return (
        <div className={styles.ScrollOuter}>
            <div>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages}/>
                </div>
            </div>
        </div>
    );
}
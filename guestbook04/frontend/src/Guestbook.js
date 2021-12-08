import React, {useEffect, useState} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';


const Guestbook = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchList();
    },[])

    const notifyMessage = {
        delete: (no) => {
            setMessages(messages.filter((message) => message.no != no));
        },
        add: async (message) => {
            const response = await fetch('/api/add', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(message)
            });
            const obj = await response.json(); // json 문자열을 자바스크립트 객체로 바꿔줌

            setMessages([obj.data, ...messages]);
        }
    }

    const fetchList = async function() {
        const startNo = messages.length === 0 ? 0 : messages[messages.length-1].no;

        try{
            const response = await fetch(`/api/list/${startNo}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json'

                }
            });

            const json = await response.json();

            json.data.length > 0 && setMessages([...json.data]);

        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <div className={styles.Guestbook}>
                <h1>방명록</h1>
                <WriteForm notifyMessage={notifyMessage}/>
                <MessageList messages={messages} notifyMessage={notifyMessage}/>
            </div>
            
        </div>
    );
};

export default Guestbook;
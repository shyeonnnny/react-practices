import React, {useEffect, useState, useRef} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    let isFetching = false;
    const outterRef = useRef(null); // useRef는 항상 null로 시작
    const innerRef = useRef(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessage();
    }, []);

    useEffect(() => {
        console.log("!!!!!!!!!!!--------> UPDATE!!!!!");
    });

    const notifyMessage = {
        delete: function (no) {
            setMessages(messages.filter((message) => message.no != no));
        },
        add: async function (message) {
            const response = await fetch('/api/add', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(message)
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw json.message;
            }
            setMessages([json.data, ...messages]);
            
        }
    }

    const fetchMessage = async function () {
        console.log('[ex01. Enter]', ' Fetching');
        if(isFetching === true) {
            console.log('[Prevent]', ' Fetching -------');
            return;
        }

        isFetching = true;
        console.log('[02.Start]', ' Fetching');

        const startNo = messages.length === 0 ? 0 : messages[messages.length-1].no;

        try {
            const response = await fetch(`/api/list/${startNo}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw json.message;
            }

            // setMessages([...messages, ...json.data]);
            json.data.length > 0 && setMessages([...messages, ...json.data]);
            console.log('[03End]', ' Fetching');
            isFetching = false;
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div
            ref={outterRef}
            className={styles.ScrollOuter}
            onScroll={e => {
                if (outterRef.current.scrollTop + outterRef.current.clientHeight > innerRef.current.clientHeight) {
                    fetchMessage();
                    // console.log('fetching.........'); // 맨밑에 스크롤이한번닿았는데4번씩호출됨
                }
            }}>
            <div ref={innerRef}>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import AddForm from './AddFrom';

export default function() {
    // 여기 useEffect쓰면 라이프싸이클임 []이거안붙이면 렌더링할떄마다 호출됨
    return (
        <div id='App'>
            <div class="Guestbook">
            <h1>방명록</h1>
            <AddForm />
            </div>
        </div>
    )
}
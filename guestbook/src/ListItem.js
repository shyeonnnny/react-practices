import React from 'react';

export default function({name, contents}) {
    return (
                <li className="Guestbook__List__Item">
                    <strong>{name}</strong>
                    <p dangerouslySetInnerHTML={{__html: contents.replace('\n','<br/>') }}>                        
                    </p>
                    <strong></strong>
                    <a href=''>삭제</a>
                </li>
    )
}
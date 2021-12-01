import React from 'react';
import guest from './assets/json/data.json' 
import ListItem from './ListItem'


export default function() {
    return (
        <div>
            <ul className="Guestbook__List">
                {guest.map((g) => <ListItem
                                        key={g.no}
                                        name={g.name}
                                        contents={g.contents} /> ) }
            </ul>
        </div>
    )
}
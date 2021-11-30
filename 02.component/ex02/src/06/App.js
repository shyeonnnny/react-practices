import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

// additional... 꼭 필요하지 않음
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';


export default function() {
    library.add(faBell, fab, far);

    return (
        <div>
            {/* examples */}
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faTimesCircle} />


            {/* solid */}
            <FontAwesomeIcon icon={["fas", "bell"]}/>

            {/* brands */}
            <FontAwesomeIcon icon={["fab", "github"]}/>
            <FontAwesomeIcon icon={["fab", "apple"]}/>
            <FontAwesomeIcon icon={["fab", "google"]}/>

            {/* regular */}
            <FontAwesomeIcon icon={["far", "bell"]}/>

        </div>
    )
}
import React from 'react';
import styles from './assets/scss/Email.scss'
const Email = ({firstName, lastName, email, callback, listno}) => {
    return (
        <div>
                <li className={styles.Email}>
                    <a  onClick={(e) => {
                        e.preventDefault();
                        callback(listno);
                        console.log(listno)
                    }}/>
                    <h4>
                        {email}
                    </h4>
                    <span>
                        {`${firstName} ${lastName}`}
                    </span>
                </li>
        </div>
    );
};

export default Email;
import React from 'react';
import styles from './assets/scss/EmailList.scss'
import Email from './Email'
const EmailList = () => {
    return (
        <div>
            <ul className={styles.Emaillist}>
                <Email />
                <Email />
                <Email />
            </ul>
        </div>
    );
};

export default EmailList;
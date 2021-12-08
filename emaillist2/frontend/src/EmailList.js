import React from 'react';
import styles from './assets/scss/EmailList.scss'
import Email from './Email'
const EmailList = ({keyword, emails, callback}) => {
    console.log('emaillist', keyword);
    return (
        <div>
            <ul className={styles.Emaillist}>
                {
                    emails
                        .filter((email) => email.firstName.indexOf(keyword) !== -1 || email.lastName.indexOf(keyword) !== -1 || email.email.indexOf(keyword) !== -1)
                        .map((email) => <Email key={email.no}
                                                    firstName={email.firstName}
                                                    lastName={email.lastName}
                                                    email={email.email}
                                                    
                                                    callback={callback}
                                                    listno={email.no}    />)
                }
            </ul>
        </div>
    );
};

export default EmailList;
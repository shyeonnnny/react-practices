import React from 'react';
import styles from './assets/scss/Email.scss'
const Email = ({firstName, lastName, email}) => {
    return (
        <div>
                <li className={styles.Email}>
                    <a href='' />
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
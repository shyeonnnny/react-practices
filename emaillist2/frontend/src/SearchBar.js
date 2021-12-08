import React, { useState } from 'react';
import styles from './assets/scss/SearchBar.scss'

const SearchBar = ({keyword, callback}) => {
    // const[keyword, setkeyword] = useState('');
    // const onInputChanged = (e) => {
    //     setkeyword(e.target.value);
    //     callback(e.target.value)
    // }
    return (
        <div className={styles.Searchbar}>
                {/*찾기: <input type='text' placeholder='찾기' value={keyword} onChange={(onInputChanged)}/>*/}
                찾기: <input type='text' placeholder='찾기' value={keyword} onChange={(e) => callback(e.target.value)}/>
        </div>
    );
};

export default SearchBar;
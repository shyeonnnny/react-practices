import React, {useState} from 'react';
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm'
import SearchBar from './SearchBar'
import EmailList from './EmailList'
import data from './assets/json/data.json'

export default function() {
    const [keyword, setkeyword] = useState('');
    const [emaillist, setemaillist] = useState(data);

    const removeList = (no) => {
      setemaillist(emaillist.filter(e => e.no != no))
    }


    const onSubmit2 = (form) => {
      form.no = emaillist.length + 1;
      setemaillist(emaillist => [...emaillist, form]);
    }


    const notifyKeywordChanged = (keyword) => {
      console.log(keyword);
      setkeyword(keyword);
    }

    return (
        <div className={'App'}>
          <RegisterForm callback2={onSubmit2}/>
          <SearchBar callback={notifyKeywordChanged}/>
          <EmailList keyword={keyword} emails={emaillist} callback={removeList}/>
        </div>
    )
}
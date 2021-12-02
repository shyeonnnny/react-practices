import React from 'react';
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm'
import SearchBar from './SearchBar'
import EmailList from './EmailList'

export default function() {
    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar />
          <EmailList />
        </div>
    )
}
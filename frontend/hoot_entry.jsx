import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import {login, logout, signup} from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id }
        };
    };
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;

    const store = configureStore(preloadedState);
    delete window.currentUser; 

    ReactDOM.render(<Root store={store} />, root)
})

//test
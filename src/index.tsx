import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './model/store';
import { Environment } from './Environment';
import { auth0Service } from './services/Auth0Service';
import { arnoAPIClient } from './api/ArnoClient';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

// Temporary solution for token storage.
// TODO: Remove this and use local storage.
const token: string | undefined = undefined;

const startup = () => {
  // 1. Set the Environment.
  // TODO: actually set these up
  Environment.set({
    navigation: {
      navigate: () => {},
      goBack: () => {},
    },
    api: arnoAPIClient({
      baseURL: '',
      getToken: () => Promise.resolve(token),
      log: message => {},
    }),
    services: {
      auth: auth0Service({ clientID: '', domain: '' }),
    },
  });

  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};

startup();

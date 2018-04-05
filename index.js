import React from 'react';
import ReactDOM from 'react-dom';
// main app
import App from './containers/App';
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('app')
  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    root
  )
  
} );

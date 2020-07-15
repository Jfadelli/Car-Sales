import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer)
console.log('This is my state', store.getState())

const rootElement = document.getElementById('root');
function reducer() {
    return {
        title: 'hello world! I\'m in the Redux store!',
    }
}
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

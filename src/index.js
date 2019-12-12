import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import Reducer from './component/reducer.js'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MovieLists } from './component/action.js';

const store = createStore(Reducer, applyMiddleware(thunk));
store.dispatch(MovieLists());
export default store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

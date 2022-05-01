import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import herosReducer from './reducers/herosReducer';
import { logActions, reportError } from './middlewares';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
    applyMiddleware(thunk, logActions, reportError )
);

const store = createStore( 
    herosReducer,
    composedEnhancers
    );

ReactDOM.render(
    <Provider store={store} >
        <App />
        </Provider>
    , document.getElementById('app')
    );
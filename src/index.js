import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import App from './App';
import appReducer from './reducers/appReducer.js';

var appStoreWithMiddleware = createStore(appReducer, applyMiddleware(promiseMiddleware));


var reactElements = document.getElementsByClassName("whiskR");
Array.prototype.forEach.call(reactElements, function(element){
  ReactDOM.render(
    <Provider store={appStoreWithMiddleware}>
      <App element = {element}/>
    </Provider>
    , element);
});

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.jsx';

import style from './scss/main.scss'

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDom.render( 
<Provider store={createStoreWithMiddleware(reducers)}>
< App / > 
</Provider>
,
    document.getElementById('app')
)
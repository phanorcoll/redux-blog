import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import PostsIndex from './containers/posts_index.jsx';
import style from './scss/main.scss'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div className="container">
                <Route path="/" component={PostsIndex} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));
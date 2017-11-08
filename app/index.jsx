import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers/index.jsx';
import PostsIndex from './containers/posts_index.jsx';
import PostsNew from './containers/posts_new.jsx';

import style from './scss/main.scss'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/new" component={PostsNew} />
                    <Route path="/" component={PostsIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));
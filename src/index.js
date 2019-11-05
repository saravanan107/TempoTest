import './index.css';

import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import App from './App';
import Notfound from './NotFound/NotFound';
import React from 'react';
import ReactDOM from 'react-dom'

const routing = (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route component={Notfound} />
      </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Fragment } from 'react';
import Login from './pages/login/login';
import Home from './pages/home/home';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss'

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
          {/* exact表示是否精确匹配。 */}
          <Route exact path='/' component={Home}></Route>
          <Redirect to={'/home'}></Redirect>
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;

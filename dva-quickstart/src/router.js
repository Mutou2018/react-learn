import React from 'react';
import dva from 'dva';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
import IndexPage from './pages/IndexPage';
import Products from './pages/Products';

const app = dva()

const ExampleDynamic = dynamic({
  app,
  models:()=>[],
  component:()=>import ('./pages/ExamplePage')
})

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/example" component={ExampleDynamic} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

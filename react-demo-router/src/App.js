import React, { Component } from 'react';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Book from './pages/Books'
import TodoList from './pages/TodoList'
import Menu from './pages/Menu'
import './reset.css'
import './App.scss'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <div className='sideMenu'>
            <div>
              <div><Link to='/'>每日清单</Link></div>
              <div><Link to='/book/'>书籍</Link></div>
              <div><Link to='/menu/'>菜单</Link></div>
            </div>
          </div>
          <Switch>
            <Route path='/' exact component={TodoList}></Route>
            <Route path='/book/' component={Book}></Route>
            <Route path='/menu/' component={Menu}></Route>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;

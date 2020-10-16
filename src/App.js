import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import TodoList from './pages/todolist/loadable'
import Home from './pages/home'


function App() {
  return (

      <Router>
          <Route path='/' exact component={Home}></Route>
          <Route path='/todo/:name' exact component={TodoList}></Route>
      </Router>
    

  );
}

export default App;

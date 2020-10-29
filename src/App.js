import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import TodoList from './pages/todolist/loadable'
import Upload from './pages/upload/loadable'
import Home from './pages/home'
import 'antd/dist/antd.css';


function App() {
  return (

    <Router>
      <Route path='/' exact component={Home}></Route>
      <Route path='/files' exact component={Upload}></Route>
      <Route path='/todo' exact component={TodoList}></Route>
    </Router>
    

  );
}

export default App;

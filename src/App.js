import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import TodoList from './pages/todolist/loadable'
import Home from './pages/home'


function App() {
  return (

      <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/todo' exact component={TodoList}></Route>
      </BrowserRouter>
    

  );
}

export default App;

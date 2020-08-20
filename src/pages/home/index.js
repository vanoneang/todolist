import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './home.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to={'/todo'}>
            <p  className="yellow">跳转TODOLIST页</p>
          </Link>
        </header>
      </div>
    )
  };

  componentDidMount() {
    
    // eslint-disable-next-line no-unused-expressions
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: 'todo' */
      "../todolist"
    )

  }
}


export default App;

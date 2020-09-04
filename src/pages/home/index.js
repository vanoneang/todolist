import React from 'react';
import logo from './logo.svg';
import './home.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p  className="yellow" onClick={this.handleLogin}>Login with GitHub</p>
          {/* <Link to={'/todo'}>
            <p  className="yellow">跳转TODOLIST页</p>
          </Link> */}
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

  handleLogin = () => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=a03a30cd8596c3faf592&redirect_uri=http://localhost:3000/oauth/github/callback'
  }
}


export default App;

import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import './home.scoped.css';



class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="box">
          <Button type="link" size="large">
            <Link to="/files" data-test="link-of-upload">Upload File</Link>
          </Button>

          <Button type="link" size="large">
            <Link to="/todo" data-test="link-of-todo">Todo List</Link>
          </Button>
        </div>
        {/* <p  className="yellow" onClick={this.handleLogin}>Login with GitHub</p>
           */}

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
    // eslint-disable-next-line no-unused-expressions
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: 'files' */
      "../upload"
    )

  }

  handleLogin = () => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=a03a30cd8596c3faf592&redirect_uri=http://localhost:3000/oauth/github/callback'
  }
}


export default App;

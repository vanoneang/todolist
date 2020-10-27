import React from 'react';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './home.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="box">
          <div className="left">
            <input onChange={this.handleUpload} type="file" name='file' multiple></input>
          </div>
        </div>
        {/* <p  className="yellow" onClick={this.handleLogin}>Login with GitHub</p>
          <p ><Link to="/upload"><button>Upload File</button></Link></p> */}
        {/* <div><input onChange={this.handleUpload} type="file" name='file'></input></div> */}

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

  handleUpload = async (e) => {
    const File = e.target.files[0]
    if (e.target.files !== undefined && File !== undefined) {
      const params = new FormData()
      params.append('file', File, uuidv4() + '.' + File.type.split('/')[1])
      const result = await axios.post('http://localhost:3000/stream/upload', params, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('result', result);
      
    }
  }
}


export default App;

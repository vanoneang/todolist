import React from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { List, Divider } from 'antd';
import './style.scoped.css';


class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  render () {
    return (
      <div className="App">
        <div className="box">
          <div className="left">
            <input onChange={this.handleUpload} type="file" name='file' accept="image/*"></input>
          </div>
          <div className="right">
            <Divider orientation="left">Upload Files</Divider>
            <List
              bordered
              dataSource={this.state.files}
              renderItem={item => (
                <List.Item>
                  {item.path}
                </List.Item>
              )}
            />
          </div>
        </div>
        {/* <p  className="yellow" onClick={this.handleLogin}>Login with GitHub</p>
          <p ><Link to="/upload"><button>Upload File</button></Link></p> */}
        {/* <div><input onChange={this.handleUpload} type="file" name='file'></input></div> */}

      </div>
    )
  };

  componentDidMount() {
    this.getFiles()

  }

  getFiles = () => {
    axios.get('http://localhost:3000/stream/').then(res => {
      
      this.setState({
        files: res.data.files
      })

    })
  }

  handleUpload = async (e) => {
    const File = e.target.files[0]
    if (e.target.files !== undefined && File !== undefined) {
      const params = new FormData()
      params.append('file', File, uuidv4() + '.' + File.type.split('/')[1])
      await axios.post('http://localhost:3000/stream/upload', params, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      this.getFiles()
      
    }
  }
}


export default Upload;
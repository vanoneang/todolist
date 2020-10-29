import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Input, Button, List } from 'antd';
import { ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_INPUT_VALUE } from '../../store/actionTypes'



class TodoList extends React.Component {
 
    
  // const { inputValue, list, changeInputValue, handleClick, deleteItem } = props;
  render () {

    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        {/* <label>{this.props.match.params.name}:</label> */}
        <div>
          <Input 
            value={this.props.inputValue}
            placeholder='todo info'  
            onChange={this.props.changeInputValue}
            style={{width: '300px', marginRight: '10px'}}
          />
          <Button type="primary" onClick={this.props.handleClick}>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.props.list}
          renderItem={
            (item, index) => (<List.Item onClick={() => {this.props.deleteItem(index)}}>{index+1}. {item.value} {item.timestamp}</List.Item>)
          }
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value
      };
      dispatch(action);
    },

    async handleClick() {
      const module = await import('moment')
      const moment = module.default
      const action = {
        type: ADD_TODO_ITEM,
        timestamp: moment().format('h:mm:ss a')
      };
      dispatch(action);
    },
    
    deleteItem() {
      const action = {
        type: DELETE_TODO_ITEM
      }
      dispatch(action)
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));

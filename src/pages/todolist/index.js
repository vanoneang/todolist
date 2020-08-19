import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Input, Button, List } from 'antd';
import { ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_INPUT_VALUE } from '../../store/actionTypes'



const TodoList = (props) => {

    const { inputValue, list, changeInputValue, handleClick, deleteItem } = props;
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input 
            value={inputValue}
            placeholder='todo info'  
            onChange={changeInputValue}
            style={{width: '300px', marginRight: '10px'}}
          />
          <Button type="primary" onClick={handleClick}>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={list}
          renderItem={
          (item, index) => (<List.Item onClick={() => {deleteItem(index)}}>{index+1}. {item.value} {item.timestamp}</List.Item>)
          }
        />
      </div>
    )
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

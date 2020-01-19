import React, { Component } from 'react';
import { Icon } from 'antd';
import './task.css';

class Task extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className='taskContainer'>
          <div className='taskNameDiv'>
            <div className='round'>
              <input className='taskCheckBox' type='checkBox'></input>
              <label for='checkBox'></label>
            </div>
            <p>{this.props.Tasks.content}</p>
          </div>
          <div className='taskIconDiv'>
            <Icon type='info-circle' />
            <Icon type='message' />
            <Icon type='ellipsis' />
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Task;

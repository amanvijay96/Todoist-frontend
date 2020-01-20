import React, { Component } from 'react';
import { Icon, Dropdown } from 'antd';
import TaskMenu from './TaskMenu';
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
            <p>{this.props.task.content}</p>
          </div>
          <div className='taskIconDiv'>
            <Icon type='info-circle' />
            <Icon type='message' />

            <Dropdown
              //   id={this.props.projects.id}
              onClick={event => event.stopPropagation()}
              //   onDeleteTask={() => this.props.deleteTask(this.props.task.id)}
              overlay={() => (
                <TaskMenu
                  // event={event}
                  entity='task'
                  onDeleteTask={() => this.props.deleteTask(this.props.task.id)}
                  onShowModal={() => this.props.showModal(true)}></TaskMenu>
              )}
              trigger={['click']}>
              <Icon type='ellipsis' />
            </Dropdown>

            {/* <Icon type='ellipsis' /> */}
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Task;

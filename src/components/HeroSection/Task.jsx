import React, { Component } from 'react';
import { Icon, Dropdown } from 'antd';
import TaskMenu from './TaskMenu';
import './task.css';
import SubTaskModal from '../SubTaskModal/SubTaskModal';

class Task extends Component {
  state = {
    subTaskModalVisible: false,
    tabKey: '1'
  };
  handleSubTaskModalVisible = e => {
    this.setState({
      subTaskModalVisible: true,
      tabKey: e
    });
  };
  handleCancel = () => {
    this.setState({
      subTaskModalVisible: false
    });
  };
  render() {
    // console.log(this.state.role)
    console.log(this.props.task, 'aaaaaa');
    return (
      <div>
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
        <div className="taskContainer">
          <div className="taskNameDiv">
            <label className="round">
              <input className="taskCheckBox" type="checkBox"></input>
              <span className="label" />
            </label>
            <p>{this.props.task.content}</p>
          </div>
          <div className="taskIconDiv">
            <Icon
              type="info-circle"
              onClick={() => this.handleSubTaskModalVisible('1')}
            />
            <Icon
              type="message"
              onClick={() => this.handleSubTaskModalVisible('2')}
            />

            <Dropdown
              //   id={this.props.projects.id}
              onClick={event => event.stopPropagation()}
              //   onDeleteTask={() => this.props.deleteTask(this.props.task.id)}
              overlay={() => (
                <TaskMenu
                  // event={event}
                  entity="task"
                  onDeleteTask={() => this.props.deleteTask(this.props.task.id)}
                  onShowModal={() => this.props.showModal(true)}
                ></TaskMenu>
              )}
              trigger={['click']}
            >
              <Icon type="ellipsis" />
            </Dropdown>
          </div>
        </div>
        {this.props.task.due.date !== null ? (
          <div style={{ fontSize: '1.2vw', marginLeft: '2vw' }}>
            <p>{this.props.task.due.date.slice(0, 10)}</p>
          </div>
        ) : null}

        <hr />
        <SubTaskModal
          handleSubTaskModalVisible={this.handleSubTaskModalVisible}
          visible={this.state.subTaskModalVisible}
          onCancel={this.handleCancel}
          tabKey={this.state.tabKey}
          name={this.props.task.content}
        />
      </div>
    );
  }
}

export default Task;

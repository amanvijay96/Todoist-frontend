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
        <div className="taskContainer">
          <div className="taskNameDiv">
            <label className="round">
              <input className="taskCheckBox" type="checkBox"></input>
              <span className="label" />
            </label>
            <p>{this.props.task.content}</p>

            {/* <p className="datePara">{this.props.task.due.date}</p> */}
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

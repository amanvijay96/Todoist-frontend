import React, { Component } from 'react';
import { Icon } from 'antd';
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
    return (
      <div>
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
            <Icon type="ellipsis" />
          </div>
        </div>
        <hr />
        <SubTaskModal
          handleSubTaskModalVisible={this.handleSubTaskModalVisible}
          visible={this.state.subTaskModalVisible}
          onCancel={this.handleCancel}
          tabKey={this.state.tabKey}
        />
      </div>
    );
  }
}

export default Task;

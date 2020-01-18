import React from 'react';
import '../Modal/Modal.css';
import { DatePicker, Icon, Dropdown } from 'antd';
// import { connect } from 'react-redux';
import { PriorityMenu } from '../Modal/Priority';
import './AddTask.css';

class NewTask extends React.Component {
  state = {
    addtaskInput: ''
  };
  handleAddNewTask = () => {
    this.props.addATask(this.state.addtaskInput);
  };
  handleOnChange = event => {
    this.setState({
      addtaskInput: event.target.value
    });
  };
  onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };

  onOk = value => {
    console.log('onOk: ', value);
  };

  render() {
    return (
      <section>
        <div className="input-fields">
          <input
            type="text"
            placeholder="e.g. Conference Wednesday at 15 #Meeting"
            className="quick-add-title"
            onChange={this.handleOnChange}
            onAddNewTask={this.handleAddNewTask}
          />
          <div>
            <DatePicker
              showTime
              placeholder="Schedule"
              className="quick-add-schedule"
              onChange={this.onChange}
              onOk={this.onOk}
            />
          </div>
        </div>
        <div className="task-buttons">
          <button className="add-task-button">Add Task</button>
          <button className="cancel-button-task" value='false' onClick={this.props.cancel}>Cancel</button>
          <div className="task-icons">
            <Icon type="bars" />
            <Icon type="tag" />
            <Dropdown overlay={PriorityMenu} trigger={['click']}>
              <Icon type="flag" />
            </Dropdown>
            <Icon type="clock-circle" />
          </div>
        </div>
      </section>
    );
  }
}

export default NewTask;

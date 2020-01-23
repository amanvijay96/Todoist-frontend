import React from 'react';

import { DatePicker, Icon, Dropdown } from 'antd';
// import { connect } from 'react-redux';
import PriorityMenu from '../Modal/Priority';
import './AddTask.css';
import '../Modal/Modal.css';
import SelectProject from '../AddTask/ProjectsDropdown.jsx';
// import { addTask } from '../../actions/taskAction';
import { connect } from 'react-redux';
import Label from '../HeroSection/Label';
import Reminder from './Reminder';

class NewTask extends React.Component {
  state = {
    addtaskInput: '',
    date: '',
    priority: 4
  };
  handleAddNewTask = () => {
    this.props.addTask(
      this.state.addtaskInput,
      this.state.date,
      this.state.priority
    );
    console.log('fghj');
    this.setState({
      addtaskInput: ''
    });
    console.log(this.state);
  };
  handleOnChange = event => {
    this.setState({
      addtaskInput: event.target.value
    });
  };
  onChange = (value, dateString) => {
    // console.log('Selected Time: ', value);
    // dateString = new Date(dateString);
    console.log('Formatted Selected Time: ', dateString);
    this.setState({
      date: dateString
    });
    console.log(this.state.date, 'dateeee');
  };
  handlePriority = priority => {
    this.setState({
      priority: priority
    });
  };
  // onOk = value => {
  //   console.log('onOk: ', value);
  // };

  render() {
    // console.log(this.state, 'Rishav');
    return (
      <section>
        <div className="input-fields">
          <input
            type="text"
            value={this.state.addtaskInput}
            placeholder="e.g. Conference Wednesday at 15 #Meeting"
            className="quick-add-title"
            onChange={this.handleOnChange}
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
          <button onClick={this.handleAddNewTask} className="add-task-button">
            Add Task
          </button>
          {this.props.cancelVisible && (
            <button
              className="cancel-button-task"
              value="false"
              onClick={this.props.cancel}
            >
              Cancel
            </button>
          )}
          <div className="task-icons">
            <Dropdown
              overlay={<SelectProject projects={this.props.projects} />}
              trigger={['click']}
            >
              <Icon type="bars" className="bars" />
            </Dropdown>
            <Dropdown overlay={<Label />} trigger={['click']}>
              <Icon type="tag" className="tag" />
            </Dropdown>
            <Dropdown
              overlay={<PriorityMenu handlePriority={this.handlePriority} />}
              trigger={['click']}
            >
              <Icon type="flag" className="flag" />
            </Dropdown>
            <Dropdown overlay={<Reminder />} trigger={['click']}>
              <Icon type="clock-circle" className="clock" />
            </Dropdown>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state)
  return {
    projects: state.projectModalReducer.projects
  };
};
// mapDispatchToProps = dispatch => {}
export default connect(mapStateToProps)(NewTask);

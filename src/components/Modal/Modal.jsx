import React, { Component } from 'react';
import { Modal } from 'antd';
import './Modal.css';
import { DatePicker, Icon, Dropdown } from 'antd';
import { connect } from 'react-redux';
// import Priority from './Priority';
import { menu } from './Priority';

class Modals extends React.Component {
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
      <div>
        <Modal
          title="Quick Add Task"
          visible={this.props.visible.visible}
          onCancel={this.props.handleCancel}
        >
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
              <div className="task-icons">
                <Icon type="bars" />
                <Icon type="tag" />
                <Dropdown overlay={menu} trigger={['click']}>
                  <Icon type="flag" />
                </Dropdown>
                <Icon type="clock-circle" />
              </div>
            </div>
          </section>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { visible: state.modalReducer };
};
export default connect(mapStateToProps)(Modals);


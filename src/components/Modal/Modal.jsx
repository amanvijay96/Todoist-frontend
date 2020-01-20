import React from 'react';
import { Modal } from 'antd';
import './Modal.css';
import { DatePicker, Icon, Dropdown } from 'antd';
import { connect } from 'react-redux';
import PriorityMenu from './Priority';
import { addTask } from '../../actions/modalAction';

class Modals extends React.Component {
  state = {
    addtaskInput: ''
  };
  handleAddNewTask = () => {
    this.props.addTask(this.state.addtaskInput);
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
          footer={null}
          width="560px"
        >
          <section>
            <div className="input-fields">
              <input
                type="text"
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
              <button
                className="add-task-button"
                onClick={this.handleAddNewTask}
              >
                Add Task
              </button>
              <div className="task-icons">
                <Icon type="bars" className="bars" />
                <Icon type="tag" className="tag" />
                <Dropdown overlay={<PriorityMenu />} trigger={['click']}>
                  <Icon type="flag" className="flag" />
                </Dropdown>
                <Icon type="clock-circle" className="clock" />
              </div>
            </div>
          </section>
        </Modal>
      </div>
    );
  }
}
// taskData: state.tasks.taskData
const mapStateToProps = state => {
  return { visible: state.modalReducer };
};
export default connect(mapStateToProps, { addTask })(Modals);

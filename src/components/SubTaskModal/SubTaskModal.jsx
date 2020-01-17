import React from 'react';
import { Modal } from 'antd';
import './SubTaskModal.css';
import { DatePicker, Icon, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { priorityMenu } from '../Modal/Priority';
// import { addTask } from '../../actions/modalAction';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class SubTaskModal extends React.Component {
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
  callback = key => {
    console.log(key);
  };

  render() {
    return (
      <div>
        <Modal
          title="file name"
          // visible={true}
          // {this.props.visible.visible}
          onCancel={this.props.handleCancel}
          footer={null}
          width="600px"
          bodyStyle={{ height: '540px' }}
          centered={true}
          className="sub-task-modal"
          style={{ left: '330px', top: '30px' }}
        >
          <section>
            <div>Title</div>
            <Dropdown
              overlay={() => (
                <DatePicker
                  showTime
                  placeholder="Schedule"
                  className="quick-add-schedule"
                  onChange={this.onChange}
                  onOk={this.onOk}
                ></DatePicker>
              )}
              trigger={['click']}
            >
              <button>date</button>
            </Dropdown>

            <div className="task-icons1">
              <div className="sub-task-icons">
                <Icon type="bars" className="bars" />
                <Icon type="tag" className="tag" />
                <Dropdown overlay={priorityMenu} trigger={['click']}>
                  <Icon type="flag" className="flag" />
                </Dropdown>
                <Icon type="clock-circle" className="clock" />
              </div>
            </div>

            <Tabs
              tabBarGutter="138px"
              defaultActiveKey="1"
              onChange={this.callback}
            >
              <TabPane tab="Sub-tasks" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Comments" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Activity" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
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
export default connect(mapStateToProps)(SubTaskModal);

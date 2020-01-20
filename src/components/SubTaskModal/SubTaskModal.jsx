import React from 'react';
import { Modal } from 'antd';
import './SubTaskModal.css';
import { DatePicker, Icon, Dropdown } from 'antd';
// import { connect } from 'react-redux';
import { PriorityMenu } from '../Modal/Priority';
import NewTask from '../AddTask/AddTask.jsx';
// import { addTask } from '../../actions/modalAction';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class SubTaskModal extends React.Component {
  state = {
    visible: false,
    addSubtaskInput: '',
    toggle: 'false',
    tabKey: '1'
  };

  handleAddNewTask = () => {
    this.props.addTask(this.state.addSubtaskInput);
    this.setState({
      addSubtaskInput: ''
    });
  };
  handleOnChange = event => {
    this.setState({
      addSubtaskInput: event.target.value
    });
  };

  handleTab = keyVal => {
    this.setState({ tabKey: keyVal });
  };
  // onChange = (value, dateString) => {
  //   console.log('Selected Time: ', value);
  //   console.log('Formatted Selected Time: ', dateString);
  // };

  // onOk = value => {
  //   console.log('onOk: ', value);
  // };
  // callback = key => {
  //   console.log(key);
  // };

  handletoggle = e => {
    this.setState({ toggle: e.target.value });
  };
  render() {
    console.log(this.props.role);
    return (
      <div>
        <Modal
          title="file name"
          visible={this.props.visible}
          onCancel={this.props.onCancel}
          footer={null}
          width="600px"
          bodyStyle={{ height: '540px' }}
          centered={true}
          className="sub-task-modal"
          style={{ left: '330px', top: '30px' }}
        >
          <section>
            <div>Title</div>
            <DatePicker
              showTime
              placeholder="Schedule"
              className="quick-add-schedule"
              onChange={this.onChange}
              onOk={this.onOk}
            ></DatePicker>
            <div className="task-icons1">
              <div className="sub-task-icons">
                <Icon type="bars" className="bars" />
                <Icon type="tag" className="tag" />
                <Dropdown overlay={PriorityMenu} trigger={['click']}>
                  <Icon type="flag" className="flag" />
                </Dropdown>
                <Icon type="clock-circle" className="clock" />
              </div>
            </div>

            <Tabs
              // defaultActiveKey={
              //   this.props.role === 'subtask' ? '1' : ''
              // }
              activeKey={this.props.tabKey}
              onTabClick={this.handleTab}
              onChange={this.props.handleSubTaskModalVisible}
              // onChange={this.callback}
            >
              <TabPane tab="Sub-tasks" key="1">
                {this.state.toggle === 'false' ? (
                  <button
                    className="add-sub-task-button"
                    onClick={this.handletoggle}
                    value="true"
                  >
                    <Icon type="plus" className="plus-button" />
                    <p className="add-sub-task">Add sub-task</p>
                  </button>
                ) : (
                  <NewTask cancel={this.handletoggle} />
                )}
              </TabPane>
              <TabPane tab="Comments" key="2">
                <div className="comments-logo">
                  <img
                    src={require('../../comments.svg')}
                    alt="Write a Comment"
                  />
                </div>
                <div className="comments-section">
                  <textarea
                    placeholder="Write a comment"
                    className="comment-text-area"
                  />
                  <hr />
                  <div className="comments-icon-and-button">
                    <div className="comments-icon">
                      <Icon type="paper-clip" />
                      <Icon type="audio" />
                      <Icon type="smile" />
                    </div>
                    <button className="add-comment-button">Add Comment</button>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Activity" key="3">
                <div className="comments-logo">
                  <img src={require('../../activity.svg')} alt="Activities" />
                </div>
              </TabPane>
            </Tabs>
          </section>
        </Modal>
      </div>
    );
  }
}

export default SubTaskModal;

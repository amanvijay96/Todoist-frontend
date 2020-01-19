import React from 'react';
import { Modal } from 'antd';
import './SubTaskModal.css';
import { DatePicker, Icon, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { PriorityMenu } from '../Modal/Priority';
import NewTask from '../AddTask/AddTask.jsx';
// import { addTask } from '../../actions/modalAction';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class SubTaskModal extends React.Component {
  state = {
    addSubtaskInput: '',
    toggle: 'false'
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

  handletoggele = e => {
    // console.log(e.target.value)
    this.setState({ toggle: e.target.value });
  };
  render() {
    return (
      <div>
        <Modal
          title='file name'
          visible={false}
          // {this.props.visible.visible}
          onCancel={this.props.handleCancel}
          footer={null}
          width='600px'
          bodyStyle={{ height: '540px' }}
          centered={true}
          className='sub-task-modal'
          style={{ left: '330px', top: '30px' }}>
          <section>
            <div>Title</div>
            {/* <Dropdown
              overlay={() => ( */}
            <DatePicker
              showTime
              placeholder='Schedule'
              className='quick-add-schedule'
              onChange={this.onChange}
              onOk={this.onOk}></DatePicker>
            {/* )}
            //   trigger={['click']}
            // >
            //   <button>date</button>
            // </Dropdown> */}

            <div className='task-icons1'>
              <div className='sub-task-icons'>
                <Icon type='bars' className='bars' />
                <Icon type='tag' className='tag' />
                <Dropdown overlay={PriorityMenu} trigger={['click']}>
                  <Icon type='flag' className='flag' />
                </Dropdown>
                <Icon type='clock-circle' className='clock' />
              </div>
            </div>

            <Tabs
              // tabBarGutter="138px"
              defaultActiveKey='1'
              onChange={this.callback}>
              <TabPane tab='Sub-tasks' key='1'>
                {this.state.toggle === 'false' ? (
                  <button
                    className='add-sub-task-button'
                    onClick={this.handletoggele}
                    value='true'>
                    <Icon type='plus' className='plus-button' />
                    <p className='add-sub-task'>Add sub-task</p>
                  </button>
                ) : (
                  <NewTask cancel={this.handletoggele} />
                )}
              </TabPane>
              <TabPane tab='Comments' key='2'>
                <div className='comments-logo'>
                  <img
                    src={require('../../comments.svg')}
                    alt='Write a Comment'
                  />
                </div>
                <div classname='comments-section'>
                  <textarea
                    placeholder='Write a comment'
                    className='comment-text-area'
                  />
                  <hr />
                  <div className='comments-icon-and-button'>
                    <div className='comments-icon'>
                      <Icon type='paper-clip' />
                      <Icon type='audio' />
                      <Icon type='smile' />
                    </div>
                    <button className='add-comment-button'>Add Comment</button>
                  </div>
                </div>
              </TabPane>
              <TabPane tab='Activity' key='3'>
                <div className='comments-logo'>
                  <img
                    src={require('../../activity.svg')}
                    // className="comment"
                    alt='Activities'
                  />
                </div>
              </TabPane>
            </Tabs>
          </section>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { visible: state.modalReducer };
};
export default connect(mapStateToProps)(SubTaskModal);

import React from 'react';
import { Modal } from 'antd';
import '../SubTaskModal/SubTaskModal.css';
import { Icon } from 'antd';
// import { connect } from 'react-redux';
// import PriorityMenu from '../Modal/Priority';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

class ProjectCommentModal extends React.Component {
  state = {
    visible: false,
    addProjectCommentInput: '',
    toggle: 'false',
    tabKey: '1'
  };

  // handleAddNewSubTask = () => {
  //   this.props.addSubTask(this.state.addSubtaskInput);
  //   this.setState({
  //     addSubtaskInput: ''
  //   });
  // };
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

  // handletoggle = e => {
  //   this.setState({ toggle: e.target.value });
  // };
  render() {
    // console.log(this.props.role);
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
          className="project-comment-modal"
          style={{ left: '330px', top: '30px' }}
        >
          <section>
            <Tabs
              // className="project-comments-tab"
              activeKey={this.props.tabKey}
              onTabClick={this.handleTab}
              onChange={this.props.handleProjectCommentModalVisible}
              // onChange={this.callback}
            >
              <TabPane tab="Comments" key="1">
                <div className="comments-logo">
                  <img
                    src={require('../../comments.svg')}
                    alt="Write a Comment"
                  />
                </div>
                <div className="project-comments-section">
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
              <TabPane tab="Activity" key="2">
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

export default ProjectCommentModal;

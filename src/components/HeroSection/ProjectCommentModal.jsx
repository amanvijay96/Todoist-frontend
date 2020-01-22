import React from 'react';
import { Modal } from 'antd';
import '../SubTaskModal/SubTaskModal.css';
import { Icon } from 'antd';
import { connect } from 'react-redux';
// import PriorityMenu from '../Modal/Priority';
import { getAllComments, addComment } from '../../actions/commentsAction';
import Comment from './Comment';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

class ProjectCommentModal extends React.Component {
  state = {
    showImg: true,
    visible: false,
    addProjectCommentInput: '',
    toggle: 'false',
    tabKey: '1'
  };
  // componentDidMount() {
  //   this.props.getAllComments(this.props.projectId);
  // }
  handleAddNewComment = () => {
    this.props.addComment(
      this.state.addProjectCommentInput,
      this.props.projectId
    );
  };
  handleOnChange = event => {
    this.setState({
      addSubtaskInput: event.target.value
    });
  };

  handleTab = keyVal => {
    this.setState({ tabKey: keyVal });
  };

  render() {
    // console.log(this.props.role);
    let allComments = this.props.comments.map(comment => {
      return <Comment key={comment.id} comment={comment} />;
    });
    return (
      <div>
        <Modal
          title={this.props.name}
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
                {allComments.length === 0 ? (
                  <div className="comments-logo">
                    <img
                      src={require('../../comments.svg')}
                      alt="Write a Comment"
                    />
                  </div>
                ) : (
                  <div className="comment-section">{allComments}</div>
                )}
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
                    <button
                      className="add-comment-button"
                      onClick={this.handleAddNewComment}
                    >
                      Add Comment
                    </button>
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

const mapStateToProps = state => {
  return {
    comments: state.commentReducer.comments
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addComment: (commentContent, projectId) => {
      dispatch(addComment(commentContent, projectId));
    },
    // getAllComments: projectId => dispatch(getAllComments(projectId))
    // deleteComment: id => {
    //   dispatch(deleteComment(id));
    // }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectCommentModal);

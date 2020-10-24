import React, { Component } from 'react';
import { Icon } from 'antd';

class Comment extends Component {
  state = {};
  // handleDelete = () => {
  //   this.props.deleteComment();
  // };
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '1.5vw' }}>
        <div style={{ width: '80%' }}>{this.props.comment.content}</div>
        <Icon
          style={{ marginRight: '1.5vw' }}
          type="delete"
          onClick={() => this.handleDelete}
        />
      </div>
    );
  }
}

export default Comment;

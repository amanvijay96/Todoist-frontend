import React, { Component } from 'react';
import { Icon } from 'antd';

class Comment extends Component {
  state = {};
  render() {
    return (
      <div style={{display:'flex', justifyContent: 'space-between'}}>
        
        <div>{this.props.comment.content}</div>
        <Icon type="delete" />
      </div>
    );
  }
}

export default Comment;

import React, { Component } from 'react';
import {Icon} from 'antd'

class Comment extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <div>{this.props.comment.name}</div>
        <Icon type="delete" />
      </div>
     );
  }
}
 
export default Comment;
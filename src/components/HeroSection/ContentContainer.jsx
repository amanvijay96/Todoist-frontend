import React, { Component } from 'react';
import './contentContainer.css';

class ContentContainer extends Component {
  state = {};
  render() {
    return (
      <div className='content'>
        <h2>
          <b>{this.props.name}</b>
        </h2>
        <div className='imgDiv'>
          <img className='img' src={require('../../section.svg')} alt='' />
          <b>Keep Your tasks organized</b>
        </div>
      </div>
    );
  }
}

export default ContentContainer;

import React, { Component } from 'react';

class Section extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>section</p>
        <b>{this.props.section.name}</b>
      </div>
    );
  }
}

export default Section;

import React, { Component } from 'react';
import './AddSection.css';

class AddSection extends Component {
  state = {};
  render() {
    return (
      <section>
        <input
          type="text"
          placeholder="Name this Section"
          className="quick-add-section"
          // onChange={this.handleOnChange}
        />
        <div className="section-add-button">
          <button className="add-section">Add Section</button>
          <button
            className="cancel-button"
            onClick={this.props.cancel}
            value="false"
          >
            Cancel
          </button>
        </div>
      </section>
    );
  }
}

export default AddSection;

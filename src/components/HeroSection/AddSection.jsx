import React, { Component } from 'react';
import './AddSection.css';
import { addSection } from '../../actions/taskAction';
import { connect } from 'react-redux';

class AddSection extends Component {
  state = { addSectionInput: '' };

  handleOnChange = event => {
    this.setState({
      addSectionInput: event.target.value,
      date: event.target.showTime
    });
  };
  handleAddNewSection = () => {
    this.props.addSection(this.state.addSectionInput, this.props.projectId);
    this.setState({
      addSectionInput: ''
    });
  };
  render() {
    return (
      <section>
        <input
          type='text'
          placeholder='Name this Section'
          className='quick-add-section'
          onChange={this.handleOnChange}
        />
        <div className='section-add-button'>
          <button onClick={this.handleAddNewSection} className='add-section'>
            Add Section
          </button>
          <button
            className='cancel-button'
            onClick={this.props.cancel}
            value='false'>
            Cancel
          </button>
        </div>
      </section>
    );
  }
}

export default connect(null, { addSection })(AddSection);

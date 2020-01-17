import React, { Component } from 'react';
import { Modal, Switch } from 'antd';
import './ProjectModal.css';
import { connect } from 'react-redux';
import { addProject } from '../../actions/projectModalAction';

class ProjectModal extends React.Component {
  state = { visible: false, addProjectInput: '' };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  //   handleCancel = e => {
  //     console.log(e);
  //     this.setState({
  //       visible: false
  //     });
  //   };
  handleOnChange = event => {
    this.setState({
      addProjectInput: event.target.value
    });
  };
  onChange = checked => {
    console.log(`switch ${checked}`);
  };
  handleAddProject = () => {
    this.props.addProject(this.state.addProjectInput);
  };

  render() {
    // console.log(this.state.addProjectInput);
    return (
      <div>
        <Modal
          title='Add project'
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.props.handleCancel}>
          <section className='addProjectSection'>
            <h3 className='projectName'>Project name</h3>
            <input
              onChange={this.handleOnChange}
              className='projectNameInput'></input>
            <div className='favoriteDiv'>
              <Switch defaultChecked onChange={this.onChange} />
              <p>Add to favorites</p>
              <button
                onClick={this.handleAddProject}
                className='addProjectButton1'>
                Add
              </button>
            </div>
          </section>
        </Modal>
      </div>
    );
  }
}
export default connect(null, { addProject })(ProjectModal);

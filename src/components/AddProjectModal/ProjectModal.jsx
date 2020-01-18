import React, { Component } from 'react';
import { Modal, Switch } from 'antd';
import './ProjectModal.css';
import { connect } from 'react-redux';
import { addProject } from '../../actions/projectModalAction';

class ProjectModal extends React.Component {
  state = { visible: false, addProjectInput: '' };

  // componentDidMount() {
  //   this.props.getAllProject();
  // }

  // handleOk = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false
  //   });
  // };
  // handleCancel = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false
  //   });
  // };
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
    this.props.handleCancel(false);
  };

  render() {
    // console.log(this.state.addProjectInput);
    return (
      <div>
        <Modal
          title='Add project'
          visible={this.props.visible}
          // onOk={this.handleOk}
          onCancel={this.props.handleCancel}
          bodyStyle={{ height: '250px' }}
          width='500px'
          // height='600px'
          footer={null}>
          <section className='addProjectSection'>
            <h3 className='projectName'>Project name</h3>
            <input
              onChange={this.handleOnChange}
              className='projectNameInput'></input>
            <div className='favoriteDiv'>
              <Switch defaultChecked onChange={this.onChange} />
              <p>Add to favorites</p>
            </div>
            <div className='addProjectButton1Div'>
              <button
                onClick={this.handleAddProject}
                // onClick={this.props.handleCancel}
                // onCancel={this.props.handleCancel}
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

// const mapStateToProps = state => ({
//   projects: state.projects
//   // newPost: state.posts.item
// });
export default connect(null, { addProject })(ProjectModal);

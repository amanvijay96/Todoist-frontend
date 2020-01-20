import React from 'react';
import { Modal } from 'antd';
// import './Modal.css';

class SignupModal extends React.Component {
  state = {
    visible: false,
    nameInput: '',
    emailInput: '',
    passwordInput: ''
  };
  // handleCancel = () => {
  //   this.setState({
  //     visible: false
  //   });
  // };
  handleOnChangeName = event => {
    this.setState({
      nameInput: event.target.value
    });
  };
  handleOnChangeEmail = event => {
    this.setState({
      emailInput: event.target.value
    });
  };
  handleOnChangePassword = event => {
    this.setState({
      passwordInput: event.target.value
    });
  };
  // onCancel = () => {
  //   this.setState({
  //     visible: false
  //   });
  // };
  // onOk = value => {
  //   console.log('onOk: ', value);
  // };

  render() {
    return (
      <div>
        <Modal
          title="Sign up in seconds"
          visible={this.props.visible}
          onCancel={this.props.onCancel}
          footer={null}
          width="400px"
        >
          <section className="home-modal-section">
            <label>Your Name</label>
            <input type="text" onChange={this.handleOnChange} />
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <button className="section-button">Create My Account</button>
          </section>
        </Modal>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return { visible: state.modalReducer };
// };
// export default connect(mapStateToProps, { addTask })(Modals);
export default SignupModal;

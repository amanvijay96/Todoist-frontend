import React from 'react';
import { Modal } from 'antd';
// import './Modal.css';

class LoginModal extends React.Component {
  state = {
    visible: false,
    nameInput: '',
    emailInput: '',
    passwordInput: ''
  };

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

  // onOk = value => {
  //   console.log('onOk: ', value);
  // };

  render() {
    // console.log(this.props);
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
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <button className="section-button">Log in</button>
          </section>
        </Modal>
      </div>
    );
  }
}
// }
// const mapStateToProps = state => {
//   return { visible: state.modalReducer };
// };
// export default connect(mapStateToProps)(Modals);
export default LoginModal;

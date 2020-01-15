import React, { Component } from 'react';
import { Modal } from 'antd';
import './Modal.css';
import { Icon } from 'antd';
import { connect } from 'react-redux';

class Modals extends React.Component {

  

  render() {
    return (
      <div>
        <Modal
          title="Quick Add Task"
          visible={this.props.visible.visible}
          onCancel={this.props.handleCancel}
        >
          <section>
            <div className="input-fields">
              <input
                type="text"
                placeholder="e.g. Conference Wednesday at 15 #Meeting"
                className="quick-add-title"
              />
              <input
                type="text"
                placeholder="Schedule"
                className="quick-add-schedule"
              />
            </div>
            <div className="task-buttons">
              <button className="add-task-button">Add Task</button>
              <div className="task-icons">
                <Icon type="bars" />
                <Icon type="tag" />
                <Icon type="flag" />
                <Icon type="clock-circle" />
              </div>
            </div>
          </section>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { visible: state.openmodalReducer };
};
export default connect(mapStateToProps)(Modals);

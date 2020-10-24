import React from 'react';
import { Modal } from 'antd';
import './Modal.css';
import { connect } from 'react-redux';

import { addTask } from '../../actions/taskAction';
import NewTask from '../AddTask/AddTask';
class Modals extends React.Component {
  state = {
    addtaskInput: '',
    date: '',
    priority: 4

    // id: 0
  };
  handleAddNewTask = () => {
    console.log(this.props.projectId, 'cdscsd');
    console.log(new URL(window.location), 'cdscsd');
    this.props.addTask(
      this.state.addtaskInput,
      this.state.date,
      this.state.priority,
      new URL(window.location.id)
    );
    // taskName, date, priority, projectId,
    // this.setState({
    //   addtaskInput: ''
    // });
  };
  handleOnChange = event => {
    this.setState({
      addtaskInput: event.target.value
    });
  };
  onChange = (value, dateString) => {
    // console.log('Selected Time: ', value);
    // console.log('Formatted Selected Time: ', dateString);
    this.setState({
      date: dateString
    });
  };

  // onOk = value => {
  //   console.log('onOk: ', value);
  // };

  render() {
    return (
      <div>
        <Modal
          title="Quick Add Task"
          visible={this.props.visible.visible}
          onCancel={this.props.handleCancel}
          footer={null}
          width="560px"
          bodyStyle={{ height: '130px' }}
        >
          <section>
            <NewTask
              cancelVisible={false}
              handleAddNewTask={this.handleAddNewTask}
            />
          </section>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { visible: state.modalReducer };
};
// const mapDispatchToProps = dispatch => {
//   return addTask: ()=>{
//     dispatch({
  // addTask: (taskName, date, priority, id, sectionId) => {
  //   dispatch(addTask(taskName, date, priority, id, sectionId));
  // },
//     })
//   }
// }
export default connect(mapStateToProps, { addTask })(Modals);

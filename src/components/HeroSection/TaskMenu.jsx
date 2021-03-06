import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class TaskMenu extends Component {
  state = {};

  render() {
    return (
      <Menu>
        <Menu.Item key="0" className="task-menu">
          <div className="taskOption">
            <Icon type="edit" />
            <p>Edit task</p>
          </div>
        </Menu.Item>
        <Menu.Item className="task-menu" key="1">
          <div className="taskOption">
            <Icon type="user-add" />
            <p>Share task</p>
          </div>
        </Menu.Item>
        <Menu.Item
          className="task-menu"
          key="3"
          onClick={this.props.onDeleteTask}
        >
          <div className="projectOption">
            <Icon type="delete" />
            <p>Delete task</p>
          </div>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TaskMenu;

// export const ProjectMenu = props => {
//   console.log(props, 'zzzzzzzzzzz');
//   return (
//     <Menu>
//       {/* {console.log(props, 'lllllll')} */}
//       <Menu.Item key='0' onClick={props.OnShowModal}>
//         {
//           <div className='projectOption'>
//             <Icon type='edit' />
//             <p>Edit project</p>
//           </div>
//         }
//       </Menu.Item>
//       <Menu.Item key='1'>
//         {
//           <div className='projectOption'>
//             <Icon type='user-add' />
//             <p>Share project</p>
//           </div>
//         }
//       </Menu.Item>
//       <Menu.Item key='3' onClick={props.onDeleteProject}>
//         <div className='projectOption'>
//           <Icon type='delete' />
//           <p>Delete project</p>
//         </div>
//       </Menu.Item>
//       {/* <Menu.Item key='4'>Logout</Menu.Item> */}
//     </Menu>
//   );
// };

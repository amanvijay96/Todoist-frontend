import React, { Component } from 'react';

import { TimePicker } from 'antd';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}
class Reminder extends Component {
  state = {};
  render() {
    return (
      <TimePicker
        onChange={onChange}
        defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
      />
    );
  }
}

export default Reminder;

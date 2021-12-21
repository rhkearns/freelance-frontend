import React from 'react';

import HourCounter from './HourCounter'
import TotalHours from './TotalHours'

const HoursSection = (props) => {
  return (
    <TotalHours 
      project={props.hours}
    />
  )
}

export default HoursSection
import React, { useState } from 'react';

import { updateHours } from '../../services/projectService'

import HourCounter from './HourCounter'
import TotalHours from './TotalHours'

const HoursSection = (props) => {
  const [hoursToggle, setHoursToggle] = useState(false)
  
  const handleUpdateHours = async (totalHours) => {
    try {
      setHoursToggle(totalHours)
      const updatedProject = await updateHours(props.project._id, totalHours)
      props.handleUpdateProjectList(updatedProject)
    } catch (error) {
      throw error
    }
    
  }

  return (
    <>
      <div>
        <TotalHours 
          hours={props.hours}
          />
        <button onClick={() => setHoursToggle(!hoursToggle)}>
          Adjust Hours
        </button>
      </div>
      <div>
        <HourCounter 
          hours={props.hours}
          setHoursToggle={setHoursToggle}
          handleUpdateHours={handleUpdateHours}
        />
      </div>
    </>
  )
}

export default HoursSection
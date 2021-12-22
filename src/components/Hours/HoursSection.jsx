import React, { useState } from 'react';

import { updateHours } from '../../services/projectService'

import HourCounter from './HourCounter'
import TotalHours from './TotalHours'

const HoursSection = (props) => {
  const [hoursToggle, setHoursToggle] = useState(false)
  
  const handleUpdateHours = async (totalHours) => {
    try {
      props.setHours(totalHours)
      const updatedProject = await updateHours(props.project._id, totalHours)
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
        {hoursToggle && 
          <HourCounter 
            hours={props.hours}
            setHoursToggle={setHoursToggle}
            handleUpdateHours={handleUpdateHours}
            />
        }
      </div>
    </>
  )
}

export default HoursSection
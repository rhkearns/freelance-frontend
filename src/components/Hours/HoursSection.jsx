import React, { useState } from 'react';
// Services
import { updateHours } from '../../services/projectService'
// Components
import HourCounter from './HourCounter'
import TotalHours from './TotalHours'

const HoursSection = (props) => {
  const [hoursToggle, setHoursToggle] = useState(false)
  
  const handleUpdateHours = async (totalHours) => {
    try {
      props.setHours(totalHours)
      await updateHours(props.project._id, totalHours)
      await props.handleUpdateProjectsList(props.project)
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="hours-info">
      <div>
        <TotalHours 
          hours={props.hours}
          />
        <button className="add" onClick={() => setHoursToggle(!hoursToggle)}>
          Adjust Hours
        </button>
        {hoursToggle && 
          <HourCounter 
            hours={props.hours}
            setHoursToggle={setHoursToggle}
            handleUpdateHours={handleUpdateHours}
            />
        }
      </div>
    </div>
  )
}

export default HoursSection
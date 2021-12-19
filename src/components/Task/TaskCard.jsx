import React from 'react';
import TaskActions from './TaskActions'

const TaskCard = (props) => {
  return (
    <>
      <p>{props.task.task}</p>
      <select name="task.status">
        <option value="Not-started">Not Started</option>
        <option value="In-progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>
      <TaskActions 
        {...props}
      />
    </>
  )
}

export default TaskCard
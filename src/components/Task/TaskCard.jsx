import React from 'react';

const TaskCard = (props) => {
  return (
    <>
      <p>{props.task.task}</p>
      <select name="task.status">
        <option value="Not-started">Not Started</option>
        <option value="In-progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>
    </>
  )
}

export default TaskCard
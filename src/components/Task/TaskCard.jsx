import React from 'react';

const TaskCard = ({task}) => {
  return (
    <>
      <p>{task.task}</p>
      <p>{task.status}</p>
    </>
  )
}

export default TaskCard
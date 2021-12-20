import React from 'react';

const TaskActions = (props) => {
  return (
    <>
      <button onClick={() => props.handleDeleteTask(props.task._id)}>
        Delete Task
      </button>
    </>
  )
}

export default TaskActions
import React from 'react';

const TaskActions = (props) => {
  return (
    <>
      <button className="task-delete" onClick={() => props.handleDeleteTask(props.task._id)}>
        X
      </button>
    </>
  )
}

export default TaskActions
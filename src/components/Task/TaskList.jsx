import React from 'react';

import TaskCard from './TaskCard'

const TaskList = ({project}) => {
  return (
    <>
      {project.tasks?.map((task) => (
        <TaskCard 
          task={task}
          id={task._id}
        />
      ))
      }
    </>
  )
}

export default TaskList
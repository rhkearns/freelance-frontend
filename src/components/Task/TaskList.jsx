import React from 'react';

import TaskCard from './TaskCard'

const TaskList = ({tasks}) => {
  return (
    <>
      {tasks.tasks?.map((task) => (
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
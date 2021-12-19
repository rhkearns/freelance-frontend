import React, { useState } from 'react';

import TaskList from './TaskList';
import CreateTask from './CreateTask'

const TaskSection = ({project}) => {
  const [toggleNew, setToggleNew] = useState(false)
  
  return (
    <>
      <h1>Tasks</h1>
      <button>Add New Task</button>
      {toggleNew && 
        <CreateTask 
        project={project}
        setToggleNew={setToggleNew}
        />
      }
      <TaskList 
        project={project}
      />
    </>
  )
}

export default TaskSection
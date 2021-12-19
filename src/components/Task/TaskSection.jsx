import React, { useState } from 'react';

import TaskList from './TaskList';
import CreateTask from './CreateTask'

import * as projectService from '../services/projectServices'

const TaskSection = ({project, tasks, setTasks}) => {
  const [toggleNew, setToggleNew] = useState(false)
  
  const handleCreateTask = async (formData) => {
    try {
      const newTask = await projectService.createTask(project._id, formData)
      setTasks([...tasks, newTask])
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <h1>Tasks</h1>
      <button>Add New Task</button>
      {toggleNew && 
        <CreateTask 
        project={project}
        tasks={tasks}
        setTasks={setTasks}
        handleCreateTask={handleCreateTask}
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
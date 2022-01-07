import React, { useState } from 'react';

const CreateTask = (props) => {
  const [text, setText] = useState('')

  const formData = {
    task: text
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreateTask(formData)
    props.setToggleNew(false)
  }

  return (
    <form className="create-task" onSubmit={handleSubmit}>
      <label>Task: </label>
      <input 
        type="text" 
        autoComplete='off'
        name='task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
      >Add Task</button>
    </form>
  )
}

export default CreateTask
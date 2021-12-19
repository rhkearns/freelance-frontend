import React, { useState } from 'react';

const CreateTask = () => {
  const [text, setText] = useState('')

  const formData = {
    task: text
  }

  return (
    <form>
      <label>Task: </label>
      <input 
        type="text" 
        autoComplete='off'
        name='task'
      />
      <button
        type="submit"
      >Add Task</button>
    </form>
  )
}

export default CreateTask
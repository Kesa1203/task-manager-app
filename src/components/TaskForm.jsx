import React, { useState } from 'react'
import Button from './ui/Button'

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.trim()) {
      onAddTask(taskText)
      setTaskText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow px-3 py-2 border rounded-md"
      />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default TaskForm
import React from 'react'
import { Task } from './components/Task'

export const TodoList = (props) => {
  const { todoList, isCompleteTask, deleteTask } = props
  return (
    <div className="List">
      {todoList.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            isCompleteTask={isCompleteTask}
            deleteTask={deleteTask}
          />
        )
      })}
    </div>
  )
}

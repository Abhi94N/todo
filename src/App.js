import './App.css'
import { Job } from './components/Job'
import { User } from './components/User'
import { Planet } from './components/Planet'
import { People, Planets } from './FakeData'
import { useState } from 'react'
import { Task } from './components/Task'

// if renamed to App.modules.css you can specify css objects by using
// import styles from "./App.module.css" and pass as style={styles.classname}

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isComplete: false,
    }
    const newTodoList = [...todoList, task]
    setTodoList(newTodoList)
  }
  const deleteTask = (id) => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const isCompleteTask = (id) => {
    const UpdatedTodoList = todoList.map((task) => {
      console.log(task.isComplete)
      return task.id === id ? { ...task, isComplete: !task.isComplete } : task
    })
    setTodoList(UpdatedTodoList)
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} placeholder="add a task" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="List-container">
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
      </div>
    </div>
  )
}

export default App

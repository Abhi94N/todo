export const Task = (props) => {
  const { task, isCompleteTask, deleteTask } = props
  return (
    <div key={task.id} className="task">
      <h1>{task.taskName}</h1>
      <div className="task-controls">
        <input
          type="checkbox"
          checked={task.isComplete}
          onChange={() => isCompleteTask(task.id)}
        />
        <button onClick={() => deleteTask(task.id)}>X</button>
      </div>
    </div>
  )
}

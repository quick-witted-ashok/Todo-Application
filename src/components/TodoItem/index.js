import {useState} from 'react'
import {MdDelete} from 'react-icons/md'
import './index.css'

function TodoItem({todo, updateTodo, toggleTodo, deleteTodo}) {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(todo.text)
  const [description, setDescription] = useState(todo.description)

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      text,
      description,
      timestamp: new Date().toISOString(),
    })
    setIsEditing(false)
  }

  return (
    <li className="todo-item-container">
      <input
        type="checkbox"
        className="checkbox-input"
        checked={todo.isDone}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            className="user-input"
            onChange={e => setText(e.target.value)}
          />
          <textarea
            value={description}
            className="user-description"
            onChange={e => setDescription(e.target.value)}
          />
          <button type="button" onClick={handleUpdate}>
            Save
          </button>
        </>
      ) : (
        <>
          <h1 className={`checkbox-label text ${todo.isDone ? 'checked' : ''}`}>
            {todo.text}
          </h1>

          <span className="timestamp">
            {new Date(todo.timestamp).toLocaleString()}
          </span>

          <div className="edit">
            <button
              type="button"
              aria-label="edit"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        </>
      )}
      <p className="delete-icon-container" onClick={() => deleteTodo(todo.id)}>
        <MdDelete />
      </p>
    </li>
  )
}

export default TodoItem

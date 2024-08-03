import {useState} from 'react'
import './index.css'

const TodoInput = ({addTodo}) => {
  const [input, setInput] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (input.trim()) {
      addTodo({
        id: Date.now(),
        text: input,
        description,
        isDone: false,
        timestamp: new Date().toISOString(),
      })
      //  Again assigning values as empty strings for both input elements
      setInput('')
      setDescription('')
    } else {
      // eslint-disable-next-line no-alert
      alert('Enter valid text')
    }
  }

  return (
    <form className="todo-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-user-input"
        placeholder="What needs to be done?"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <textarea
        className="todo-description-input"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit" className="button">
        Add
      </button>
    </form>
  )
}

export default TodoInput

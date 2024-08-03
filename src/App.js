import {useState, useEffect} from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import todosData from './data/todos.json'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState(todosData)
  const [searchTerm, setSearchTerm] = useState('')

  //  Initially getting values from localstorage

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  //  Again after completion of adding the task to localstorage

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  //  Task-1 :- Adding Todo

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  //  Task-2 :- Updating Todo
  const updateTodo = updatedTodo => {
    setTodos(
      todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    )
  }

  //  Task-3 :- checking the task is it done or not

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo,
      ),
    )
  }

  //  Task-4 :- Deleting Todo

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  //  Task-5 :- Searching/filtering  the tasks

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="app-container">
      <h1 className="todos-heading">Todos Application</h1>

      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>
      <TodoInput addTodo={addTodo} />

      <div className="task-container">
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>

        <input
          type="text"
          className="search-input"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <TodoList
        todos={filteredTodos}
        updateTodo={updateTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App

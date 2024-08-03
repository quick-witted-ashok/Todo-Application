import TodoItem from '../TodoItem'
import './index.css'

function TodoList({todos, updateTodo, toggleTodo, deleteTodo}) {
  return (
    <ul className="todo-items-container">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList

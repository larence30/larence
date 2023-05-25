import { useState } from "react"
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("asdgasd")
  const [todos,  setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos( currentTodos => {
      return [
      ...currentTodos, 
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]
  })
  
  }

  return (
  <>
  <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label>New Item</label>
      <input value={newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.map(todo => {
      return <li>
      <label>
        <input type="checkbox" checked={todo.completed}/>
        {todo.title}
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    } )}
  </ul>
  </>
  )
}
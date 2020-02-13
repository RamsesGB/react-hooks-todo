import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Build really cool app",
      isCompleted: false
    },    
    {
      text: "Study Data structures",
      isCompleted: false
    }, 
  ]);

  return (
    <div className="app">
      <div className="todo-list">

      </div>
    </div>
  )
}



export default App;
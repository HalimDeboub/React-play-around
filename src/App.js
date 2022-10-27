import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
function App() {
  const [showAddTaskForm , setShowAddTaskForm] = useState(false)
  const [tasks,setTasks] = useState([])
  useEffect(()=>{
    const getTasksFromServer = async ()=>{
      const tasks = await getTasks()
     setTasks(tasks)
    }
    getTasksFromServer()
  },[])
  const getTasks = async ()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  const getTask = async (id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  const addTask = async (task)=>{
  const response  = await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(task)
  })
  const data = await response.json()
  setTasks([...tasks,data])
/* const id = Math.floor(Math.random * 1000) +1
const newTask = {id , ...task}
setTasks([...tasks , newTask]) */

  }

  const deleteTask = async (id)=>{
await fetch(`http://localhost:5000/tasks/${id}`,{
  method:"DELETE"
})
     setTasks(tasks.filter((task)=>task.id !== id))
  }
  const toggleReminder = async (id) =>   {
    const taskToggled = await getTask(id)
    const task = {...taskToggled,reminder:!taskToggled.reminder} 
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)   
     })
     const data = await res.json()
setTasks(tasks.map((task)=>task.id === id ? {...task,reminder : data.reminder}:task))
  }
  return (
   <Router>
     <div className='container'>
  
  <Header title="halim" onAdd={()=>setShowAddTaskForm(!showAddTaskForm)} showAddTask={showAddTaskForm}></Header>
 <Routes>
 <Route path="/"  element={
  
    <>
     {showAddTaskForm && <AddTask onAdd={addTask}></AddTask>}
  {tasks.length > 0 ? (<Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>) :"No Tasks"}
    <Footer></Footer> 
    </>
  
 }></Route>
  <Route path="/about" element={<About/>}></Route>
  </Routes>
    
     </div>
   </Router>
   

  );
}

export default App;

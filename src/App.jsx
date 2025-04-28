import { useEffect, useState } from "react"

function App() {
const url ="http://localhost:3000/tasks"
const [tasks,setTasks]=useState([])
const [input,setInput]=useState("")
useEffect(()=>{
fetch(url)
.then((res)=>res.json())
.then(setTasks)
.catch(err=>console.error("error fetching:",err))
},[])
function addTask(){
  if(input.trim())return
  fetch (url,{
    method: "POST",
    headers: {"Content-type":"application/json"},
    body: JSON.stringify({text:input, completed:false}),
  })
  .then(res=>res.json())
  .then(newTask=>{
    setTasks([...tasks,newTask])
    setInput("")
  })}
  function toogleTask(id,completed){
    fetch(`${url}/${id}`,{
      method : 'PATCH',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({completed :! completed})

      
    })
    .then(res=>res.json())
    .then(updated=>setTasks(tasks.map((task)=>(task.id ==id? updated:task))))
  }
  function editTask(id,newTask){
    fetch(`${url}/${id}`,{
      method:'PATCH',
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({text:newText})
    })
    .then(res=>res.json())
    .then(updated=>{
      setTasks(tasks.map((task)=>task.id==id?updated:task))

  })
  }
  function deleteTask(id){
    fetch(`${url}/${id}`,{
      method :'DELETE'
    })
    .then(()=>{
      setTasks(tasks.filter(task=>task.id!==id))
    })

  }

  



  return (
    
    <div className="app">
      <h1>Task Tracker</h1>
      <input
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder="Add new task"
      />


    </div>
  )
}

export default App

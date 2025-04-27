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

function addTask(){
  if(input.trim)return
  fetch (url,{
    method: "POST",
    headers: {"Content-type":"application/json"},
    body: JSON.stringify({text:input, completed:false}),
  })
  .then(res=>res.json())
  .then(newTask=>{
    setTasks([...tasks,newTask])
    setInput("")
  })
  

  

}
},[])
  return (
    
    <>
      
    </>
  )
}

export default App

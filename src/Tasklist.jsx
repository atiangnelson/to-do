import React from 'react'
import { useState } from 'react'

const Tasklist = ({tasks,onToggle,onDelete,onEdit}) => {
    const [editingId,setEditingId]=useState(null)
    const [editedText,setEditedText]=useState("")
    function handleEditChange(e){
        setEditedText(e.target.value)
    }
    function handleSaveEdit(id){
        if(editedText.trim()){
            onEdit(id,editedText)
            setEditingId(null)
            setEditedText("")
        }

    }
  return (
    <div>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id} style={{opacity : task.completed? 0.5:1}}>
                    <input type='checkbox' checked={task.completed} onChange={()=>onToggle(task.id,task.completed)} />
                    {editingId===task.id?
                    <>
                    <input
                    type='text'
                    value={editedText||task.text}
                    onChange={(e)=>onEdit(task.id,e.target.value)}
                    />
                    <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                    </>
                    :
                    <span
                    style={{textDecoration:task.completed? "line-through":"none"}}
                     onClick={() => { setEditingId(task.id); setEditedText(task.text); }}
                        title="Edit"
                    >
                       {task.text}
                    </span>
                    }
                    
                    <button onClick={()=>onDelete(task.id)}>Delete</button>
                    
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Tasklist
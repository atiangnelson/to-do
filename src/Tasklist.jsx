import React from 'react'

const Tasklist = ({tasks,onToggle,onDelete,onEdit}) => {
    const [editingId,setEditingId]=useState(null)
  return (
    <div>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id} style={{opacity : task.completed? 0.5:1}}>
                    <input type='checkbox' checked={task.completed} onChange={()=>onToggle(task.id,task.completed)} />
                    <span
                    style={{textDecoration:task.completed? "line through":"none"}}
                    >
                        
                    </span>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Tasklist
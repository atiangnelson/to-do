import React from 'react'

const Tasklist = ({tasks,onToogle,onDelete,onEdit}) => {
  return (
    <div>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id} style={{opacity : task.completed? 0.5:1}}/>
            ))}
        </ul>

    </div>
  )
}

export default Tasklist
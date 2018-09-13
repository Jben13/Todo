import React from 'react';
import TaskList from './tasksList.jsx';


const TaskItem = ({task}) => {
  return (
    <div className='listItem'>
      <div className='taskDetails'>{task.body}</div>
      <button onClick={() => onComplete(task)} className='completed'>Completed</button>
      <button onClick={() => onEdit(task)} className='edit'>Edit</button>
      <button onClick={() => onDelete(task)} className='delete'>Delete</button>
    </div>
  );
}

export default TaskItem;
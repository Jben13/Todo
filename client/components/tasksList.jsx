import React from 'react';
import TaskListItem from './tasksListItem.jsx';


const TasksList = (props) => {
  const taskItems = props.tasks.map((task) => {
    return (
      <TaskListItem 
        task={task}
        key={task._id}/>
    );
  });


  return (
    <div className='taskList'>
        <ul className='listOfTasks'>
        {taskItems}
        </ul>
    </div>
  );
};


export default TasksList;
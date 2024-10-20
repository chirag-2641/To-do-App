import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ task, index }) => {
  const { toggleTaskCompletion, deleteTask } = useTasks();

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div className="task-buttons">
        <button onClick={() => toggleTaskCompletion(index)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;

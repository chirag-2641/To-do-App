import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskInput = () => {
  const { addTask } = useTasks();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAddTask} className="add-task-button">Add Task</button>
    </div>
  );
};

export default TaskInput;


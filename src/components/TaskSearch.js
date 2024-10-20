import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskSearch = () => {
  const { setSearchQuery } = useTasks();

  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks"
      />
    </div>
  );
};

export default TaskSearch;

import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskFilters = () => {
  const { setFilter, filter } = useTasks(); 

  return (
    <div className="filter-buttons">
      <button 
        onClick={() => setFilter('all')} 
        className={filter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button 
        onClick={() => setFilter('completed')} 
        className={filter === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
      <button 
        onClick={() => setFilter('incomplete')} 
        className={filter === 'incomplete' ? 'active' : ''}
      >
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilters;

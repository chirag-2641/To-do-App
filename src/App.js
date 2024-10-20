import React, { useState, useEffect } from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import './style.css';
import searchIcon from './assets/searchIcon.svg'

const TodoApp = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const today = new Date();
    const date = today.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
    const day = today.toLocaleDateString('en-US', { weekday: 'long' });
    setCurrentDate(date);
    setCurrentDay(day);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="date">
          <h1>{currentDay}, {currentDate}</h1>
        </div>

        <div className="search-bar">
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="filter-buttons">
          <TaskFilters />
        </div>
      </div>

      <TaskList searchTerm={searchTerm} />
      <TaskInput />
    </div>
  );
};

const App = () => {
  return (
    <TaskProvider>
      <TodoApp />
    </TaskProvider>
  );
};

export default App;

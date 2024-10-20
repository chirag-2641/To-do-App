import React, { createContext, useState, useEffect, useContext } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const setItem = (key, item) => {
    localStorage.setItem(key, item);
  };

  const getItem = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : []; 
  };

  useEffect(() => {
    const savedTasks = getItem('tasks');
    if (savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, []); 

  useEffect(() => {
    setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (task) {
      setTasks((prevTasks) => [...prevTasks, { text: task, completed: false }]);
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const searchedTasks = filteredTasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TaskContext.Provider
      value={{
        tasks: searchedTasks,
        addTask,
        toggleTaskCompletion,
        deleteTask,
        setFilter,
        filter,
        setSearchQuery,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

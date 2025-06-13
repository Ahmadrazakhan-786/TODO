// src/components/TodoInput.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6 text-gray-300">
      <input
        type="text"
        placeholder="Enter todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-200 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        ADD
      </button>
    </form>
  );
};

export default TodoInput;

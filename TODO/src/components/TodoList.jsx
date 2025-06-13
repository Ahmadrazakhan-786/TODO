// src/components/TodoList.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No todos found.</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center p-4 bg-white rounded shadow"
          >
            <span className="text-lg">{todo.text}</span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;

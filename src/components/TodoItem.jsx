// TodoItem.jsx
import React from "react";

const TodoItem = ({ todo, isDone, deleteTodo }) => {
  return (
    <div className="w-[600px] flex justify-between gap-2">
      <input
        type="checkbox"
        onChange={() => isDone(todo.id)} // 상태 변경 함수 전달
      />
      <span
        className={`${
          todo.isDone ? "line-through text-gray-700" : ""
        } } text-xl font-serif `}
      >
        {todo.text}
      </span>
      <div className="ml-2 text-[#999]">
        {new Date(todo.date).toLocaleDateString()}
      </div>
      <button
        className="ml-1 border border-gray bg-gray-100 rounded"
        onClick={() => deleteTodo(todo.id)}
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;

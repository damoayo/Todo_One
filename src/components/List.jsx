import React from "react";
import TodoItem from "./TodoItem";
import useStore from "../hooks/store";

const List = () => {
  const todos = useStore((state) => state.todos);
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const isDone = useStore((state) => state.isDoneToggle);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-[600px]">
      <h3 className="flex flex-col gap-5">Todo List 🌱</h3>
      <input
        className="border-b border-[#2593ff] mt-3 mb-3 w-[400px] border-b border-black outline-none"
        type="text"
        placeholder="검색어를 입력해주세요"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="flex flex-col gap-5 w-[600px]">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            isDone={isDone}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default List;

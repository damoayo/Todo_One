import React, { useRef } from "react";
import useStore from "../hooks/store";

const Editor = () => {
  const addTodo = useStore((state) => state.addTodo);
  const newTodo = useStore((state) => state.newTodo);
  const setNewTodo = useStore((state) => state.setNewTodo);
  const focusRef = useRef();

  const handleInput = (e) => {
    setNewTodo(e.target.value); // 상태 업데이트
  };
  const handleButton = () => {
    if (newTodo === "") {
      focusRef.current.focus();
      return;
    }
    addTodo(newTodo); // 새로운 Todo 추가
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") { // or e.keyCode === 13
      handleButton();
    }
  };
  return (
    <div className="flex gap-3">
      <input
        ref={focusRef}
        onChange={handleInput}
        onKeyDown={onKeyPress}
        value={newTodo}
        className="p-2 flex flex-1 border border-black rounded"
        type="text"
        placeholder="새로운 Todo..."
      />
      <button
        onClick={handleButton}
        className="p-2 cursor-pointer border border-black bg-[#2593ff] rounded text-white"
      >
        추가
      </button>
    </div>
  );
};

export default Editor;

import { create } from "zustand";

const useStore = create((set) => {
  return {
    newTodo: "",
    todos: [
      { id: 1, isDone: false, text: "Todo 1", date: new Date().toDateString() },
      { id: 2, isDone: false, text: "Todo 2", date: new Date().toDateString() },
      { id: 3, isDone: false, text: "Todo 3", date: new Date().toDateString() },
    ],
    nextId: 4,
    addTodo: (text) =>
      set((state) => ({
        todos: [
          ...state.todos,
          {
            id: state.nextId,
            isDone: false,
            text,
            date: new Date().toDateString(),
          },
        ],
        nextId: state.nextId + 1,
        newTodo: "",
      })),
    deleteTodo: (id) =>
      set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
    setNewTodo: (newTodo) =>
      set(() => ({
        newTodo, // newTodo 업데이트
      })),
    filter: "",
    setFilter: (filter) => set((state) => ({ filter })),
    isDoneToggle: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      })),
  };
});

export default useStore;

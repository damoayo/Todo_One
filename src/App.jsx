import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="flex h-lvh justify-center items-center">
      <div className="flex flex-col gap-6 ">
        <Header />
        <Editor />
        <List />
      </div>
    </div>
  );
}

export default App;

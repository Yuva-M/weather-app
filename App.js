// App.js
import './App.css';
import React from "react";
import { TodoWrapper } from './components/TodoWrapper';
import MathGame from './components/mathematical game'; // Correct the import path

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <MathGame />
    </div>
  );
}

export default App;

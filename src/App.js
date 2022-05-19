import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>React Redux Todo List</h1>
      <div className="container">
        <div className="wrapper">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;

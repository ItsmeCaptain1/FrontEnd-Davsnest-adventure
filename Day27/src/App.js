import "./App.css";
import AddItem from "./components/Add";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddItem />
      <TodoList />
    </div>
  );
}

export default App;

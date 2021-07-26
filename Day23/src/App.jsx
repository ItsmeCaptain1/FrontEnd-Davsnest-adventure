import "./App.css";
import React, { useState } from "react";
import { useArray, useUnSplashPhotos } from "./components/useArray";

function App() {
  const todos = useArray(["88", "44", "25"]);
  const [query, setQuery] = useState("animals");
  const [images, error, loading] = useUnSplashPhotos("secret", query);
  return (
    <div className="App">
      <h3>Todos</h3>
      <button onClick={() => todos.add(Math.random())}>Add</button>
      <ul>
        {todos.value.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <button onClick={() => todos.removeByIndex(idx)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => todos.clear()}>Clear</button>
      <hr />
      <div>
        <h1>Sample</h1>
        <ul>
          <li>
            Animal <button onClick={() => setQuery("animals")}>Change</button>
          </li>
          <li>
            Flowers<button onClick={() => setQuery("animals")}>Change</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

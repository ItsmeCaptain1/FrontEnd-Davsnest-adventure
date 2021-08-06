import "./App.css";
import { incNumber, decNumber, changeName, changeEmail } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter);
  const Username = useSelector((state) => state.username);
  const Email = useSelector((state) => state.email);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter Using React Redux</h1>
      <button
        onClick={() => {
          dispatch(decNumber());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(incNumber());
        }}
      >
        +
      </button>
      <input
        onChange={(e) => {
          dispatch(changeName(e.target.value));
        }}
        type="text"
        placeholder="Username"
      />
      <input
        onChange={(e) => {
          dispatch(changeEmail(e.target.value));
        }}
        type="email"
        placeholder="Email"
      />
      <h2>{Username}</h2>
      <h2>{Email}</h2>
    </div>
  );
}

export default App;

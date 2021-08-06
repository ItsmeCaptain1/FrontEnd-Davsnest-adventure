import { useState } from "react";
import { useDispatch } from "react-redux";
import { Add, LoadTodo } from "../actions/index";

const AddItem = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={item}
        placeholder="Add a todo..."
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(Add({ title: item, done: false }));
          setItem("");
        }}
      >
        Add
      </button>
      <button onClick={() => dispatch(LoadTodo())}>LoadData</button>
    </div>
  );
};
export default AddItem;

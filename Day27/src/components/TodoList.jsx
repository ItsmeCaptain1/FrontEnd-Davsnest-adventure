import { useDispatch, useSelector } from "react-redux";
import { Remove } from "../actions/index";

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo);
  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
          <h4 style={{ display: "inline-block" }}>{item.title}</h4>
          <button onClick={() => dispatch(Remove(index))}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default TodoList;

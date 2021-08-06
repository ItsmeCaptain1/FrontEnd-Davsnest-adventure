const Add = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

const Remove = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

const LoadTodo = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        return dispatch({ type: "LOAD_TODO", payload: todos });
      });
  };
};

export { Add, Remove, LoadTodo };

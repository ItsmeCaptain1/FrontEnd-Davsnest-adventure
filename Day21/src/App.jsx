import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { itemName: "Apple", calorieAmount: 55 },
    { itemName: "Watermalon", calorieAmount: 35 },
    { itemName: "Banana", calorieAmount: 45 },
  ]);

  const [inputValue, setInputValue] = useState({
    itemName: "",
    calorieAmount: "",
  });

  const ADD_NEW_ITEM = () => {
    const newItem = {
      itemName: inputValue.itemName,
      calorieAmount: inputValue.calorieAmount,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue({ itemName: "", calorieAmount: "" });
  };

  const deleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);

    setItems(newItems);
  };

  const editItem = (index) => {};

  return (
    <div className="main-container">
      <div className="add-item-box">
        <input
          value={inputValue.itemName}
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
          name="itemName"
          placeholder="Add an item"
        />
        <input
          value={inputValue.calorieAmount}
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
          name="calorieAmount"
          placeholder="amount of Calories"
        />
        <button onClick={ADD_NEW_ITEM}>Add</button>
      </div>
      <div className="item-list">
        {items.map((item, index) => (
          <div className="item-container">
            <h3>{item.itemName}</h3>
            <div>You have consumed {item.calorieAmount} calories</div>
            <button type="button" onClick={() => deleteItem(index)}>
              Delete
            </button>
            <button type="button" onClick={() => editItem(index)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

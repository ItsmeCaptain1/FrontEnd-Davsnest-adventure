import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { itemName: "Apple", calorieAmount: 55, isEditing: false },
    { itemName: "Watermalon", calorieAmount: 35, isEditing: false },
    { itemName: "Banana", calorieAmount: 45, isEditing: false },
  ]);

  const [inputValue, setInputValue] = useState({
    itemName: "",
    calorieAmount: "",
    isEditing: false,
  });

  const ADD_NEW_ITEM = () => {
    const newItem = {
      itemName: inputValue.itemName,
      calorieAmount: inputValue.calorieAmount,
      isEditing: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue({ itemName: "", calorieAmount: "", isEditing: false });
  };

  const deleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  const editItem = (index) => {
    const newList = [...items];
    newList[index].isEditing = newList[index].isEditing ? false : true;
    setItems(newList);
  };

  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  return (
    <div className="main-container">
      <div className="add-item-box">
        <input
          type="text"
          required
          value={inputValue.itemName}
          onChange={(e) =>
            setInputValue({ ...inputValue, [e.target.name]: e.target.value })
          }
          name="itemName"
          placeholder="Add an item"
        />
        <input
          type="number"
          required
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
            {item.isEditing ? (
              <>
                <input
                  type="text"
                  name="itemName"
                  required
                  value={item.itemName}
                  onChange={(e) =>
                    updateItem(index, { itemName: e.target.value })
                  }
                />
                <input
                  type="number"
                  name="calorieAmount"
                  required
                  value={item.calorieAmount}
                  onChange={(e) =>
                    updateItem(index, { calorieAmount: e.target.value })
                  }
                />
              </>
            ) : (
              <>
                <h3>{item.itemName}</h3>
                <div>You have consumed {item.calorieAmount} calories</div>
              </>
            )}
            <button type="button" onClick={() => deleteItem(index)}>
              Delete
            </button>
            <button type="button" onClick={() => editItem(index)}>
              {item.isEditing ? "Done" : "Edit"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import "./home.css";

export default function Home({ meals, drinks, snacks, deleteItem, updateItem }) {
  const [selectId, setSelectId] = useState(0);
  const [updatedName, setUpdateName] = useState('');

  function changeSelectIdAndName(id, name) {
    setSelectId(id);
    setUpdateName(name);
  }

  function cancelEdit() {
    setSelectId(0);
  }

  function updatedInput(e){
    setUpdateName(e.target.value)
  }

  function saveEditName(category, id, name){
    updateItem(category, id, name);
    setSelectId(0);
  }

  return (
    <div className="homePage">
      <ul>
        <li>
          <h3>Meals</h3>
          <ul>
            {meals !== null &&
              meals.map((meal) => (
                <li key={meal.id}>
                  {selectId !== meal.id && (
                    <>
                      <div>{meal.name}</div>
                      <div>
                        <button
                          onClick={() =>
                            changeSelectIdAndName(meal.id, meal.name)
                          }
                        >
                          Edit
                        </button>
                        <button onClick={() => deleteItem("meals", meal.id)}>
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                  {selectId === meal.id && (
                    <form action="">
                      <div>
                        <input
                          type="text"
                          id="inputName"
                          required
                          defaultValue={updatedName}
                          onChange={updatedInput}
                        />
                      </div>
                      <div>
                        <button onClick={cancelEdit}>Cancel</button>
                        <button
                          onClick={() =>
                            saveEditName("meals", meal.id, updatedName)
                          }
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  )}
                </li>
              ))}
          </ul>
        </li>
        <li>
          <h3>Drinks</h3>
          <ul>
            {drinks !== null &&
              drinks.map((drink) => (
                <li key={drink.id}>
                  <div>{drink.name}</div>
                  <div>
                    <button>Edit</button>
                    <button onClick={() => deleteItem("drinks", drink.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </li>
        <li>
          <h3>Snacks</h3>
          <ul>
            {snacks !== null &&
              snacks.map((snack) => (
                <li key={snack.id}>
                  <div>{snack.name}</div>
                  <div>
                    <button>Edit</button>
                    <button onClick={() => deleteItem("snacks", snack.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

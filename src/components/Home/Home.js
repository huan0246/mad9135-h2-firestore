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
      <ul className="categoryUl">
        <li className="categoryLi">
          <h3>Meals</h3>
          <ul className="itemUl">
            {meals !== null &&
              meals.map((meal) => (
                <li key={meal.id} className="itemLi">
                  {selectId !== meal.id && (
                    <div className="itemDiv">
                      <div>{meal.name}</div>
                      <div className="btnGroup">
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
                    </div>
                  )}
                  {selectId === meal.id && (
                    <form action="" className="editForm">
                      <div>
                        <input
                          type="text"
                          id="inputName"
                          required
                          defaultValue={updatedName}
                          onChange={updatedInput}
                        />
                      </div>
                      <div className="editBtnGroup">
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

        <li className="categoryLi">
          <h3>Drinks</h3>
          <ul className="itemUl">
            {drinks !== null &&
              drinks.map((drink) => (
                <li key={drink.id} className="itemLi">
                  {selectId !== drink.id && (
                    <div className="itemDiv">
                      <div>{drink.name}</div>
                      <div className="btnGroup">
                        <button
                          onClick={() =>
                            changeSelectIdAndName(drink.id, drink.name)
                          }
                        >
                          Edit
                        </button>
                        <button onClick={() => deleteItem("drinks", drink.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                  {selectId === drink.id && (
                    <form action="" className="editForm">
                      <div>
                        <input
                          type="text"
                          id="inputName"
                          required
                          defaultValue={updatedName}
                          onChange={updatedInput}
                        />
                      </div>
                      <div className="editBtnGroup">
                        <button onClick={cancelEdit}>Cancel</button>
                        <button
                          onClick={() =>
                            saveEditName("drinks", drink.id, updatedName)
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

        <li className="categoryLi">
          <h3>Snacks</h3>
          <ul className="itemUl">
            {snacks !== null &&
              snacks.map((snack) => (
                <li key={snack.id} className="itemLi">
                  {selectId !== snack.id && (
                    <div className="itemDiv">
                      <div>{snack.name}</div>
                      <div className="btnGroup">
                        <button
                          onClick={() =>
                            changeSelectIdAndName(snack.id, snack.name)
                          }
                        >
                          Edit
                        </button>
                        <button onClick={() => deleteItem("snacks", snack.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                  {selectId === snack.id && (
                    <form action="" className="editForm">
                      <div>
                        <input
                          type="text"
                          id="inputName"
                          required
                          defaultValue={updatedName}
                          onChange={updatedInput}
                        />
                      </div>
                      <div className="editBtnGroup">
                        <button onClick={cancelEdit}>Cancel</button>
                        <button
                          onClick={() =>
                            saveEditName("snacks", snack.id, updatedName)
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
      </ul>
    </div>
  );
}

import React, { useState } from 'react'
import "./addFavorite.css";

export default function AddFavorite({ addNewItem }) {
  const [category, setCategory] = useState("meals");
  const [newItemName, setNewItemName] = useState(null);

  function submitForm(e) {
    e.preventDefault();
    if (newItemName !== null) {
      addNewItem(category, newItemName);
      //console.log(category, newItemName)
    } else {
      console.log('xxx')
    }
  }

  function changeCategory(e) {
    //console.log(e.target.value);
    setCategory(e.target.value);
  }

  function changeName(e) {
    //console.log(e.target.value);
    setNewItemName(e.target.value);
  }

  return (
    <div className="addFavorite">
      <form action="">
        <div>
          <p>Select a category:</p>
          <div className="inputPair">
            <input
              type="radio"
              id="addMeal"
              name="addFavorite"
              value="meals"
              defaultChecked
              onChange={changeCategory}
            />
            <label htmlFor="addMeal">Meal</label>
          </div>
          <div className="inputPair">
            <input
              type="radio"
              id="addSnack"
              name="addFavorite"
              value="snacks"
              onChange={changeCategory}
            />
            <label htmlFor="addSnack">Snack</label>
          </div>
          <div className="inputPair">
            <input
              type="radio"
              id="addDrink"
              name="addFavorite"
              value="drinks"
              onChange={changeCategory}
            />
              <label htmlFor="addDrink">Drink</label>
          </div>
        </div>
        <div>
          <label htmlFor="inputName">Name</label>
          <input type="text" id="inputName" onChange={changeName} required />
        </div>
        <div>
          <button onClick={submitForm}>Submit</button>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from 'react'
import "./addFavorite.css";
import { useHistory } from "react-router";

export default function AddFavorite({ addNewItem }) {
  const [category, setCategory] = useState("meals");
  const [newItemName, setNewItemName] = useState(null);
  const history = useHistory()

  function submitForm(e) {
    e.preventDefault();
    if (newItemName !== null) {
      addNewItem(category, newItemName);
      //console.log(category, newItemName)
      history.push('/')
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
        <div className="formContent">
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
              id="addDrink"
              name="addFavorite"
              value="drinks"
              onChange={changeCategory}
            />
              <label htmlFor="addDrink">Drink</label>
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
        </div>
        <div className="inputName">
          <label htmlFor="inputName" className="nameLabel">Food Name: </label>
          <input type="text" id="inputName" onChange={changeName} required />
        </div>
        <div>
          <button onClick={submitForm} className="submitBtn">Submit</button>
        </div>
      </form>
    </div>
  );
}

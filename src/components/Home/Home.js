import React from 'react'
import "./home.css";

export default function Home({ meals, drinks, snacks, deleteItem }) {
  return (
    <div className="homePage">
      <ul>
        <li>
          <h3>Meals</h3>
          <ul>
            {meals !== null &&
              meals.map((meal) => (
                <li key={meal.id}>
                  <div>{meal.name}</div>
                  <div>
                    <button>Edit</button>
                    <button onClick={() => deleteItem("meals", meal.id)}>Delete</button>
                  </div>
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
                    <button onClick={() => deleteItem("drinks", drink.id)}>Delete</button>
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
                    <button onClick={() => deleteItem("snacks", snack.id)}>Delete</button>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
      {/* {dbData !== null && (
        <ul className="categoryUl">
          <li className="categoryLi">
            <h3>Meals</h3>
            <ul className="itemUl">
              {dbData.map((item) =>
                item["meals"].map((meal) => (
                  <li key={meal.id} className="itemLi">
                    {meal.name}
                  </li>
                ))
              )}
            </ul>
          </li>
          <li className="categoryLi">
            <h3>Snacks</h3>
            <ul className="itemUl">
              {dbData.map((item) =>
                item["snacks"].map((snack) => (
                  <li key={snack.id} className="itemLi">
                    {snack.name}
                  </li>
                ))
              )}
            </ul>
          </li>
          <li className="categoryLi">
            <h3>Drinks</h3>
            <ul className="itemUl">
              {dbData.map((item) =>
                item["drinks"].map((drink) => (
                  <li key={drink.id} className="itemLi">
                    {drink.name}
                  </li>
                ))
              )}
            </ul>
          </li>
        </ul>
      )} */}
    </div>
  );
}

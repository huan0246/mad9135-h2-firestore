import React from 'react'
import "./home.css";

export default function Home({ meals, drinks, snacks }) {
  return (
    <div className="homePage">
      <ul>
        <li>
          <h3>Meals</h3>
          <ul>
            {meals !== null &&
              meals.map((meal) => <li key={meal.id}>{meal.name}</li>)}
          </ul>
        </li>
        <li>
          <h3>Drinks</h3>
          <ul>
            {drinks !== null &&
              drinks.map((drink) => <li key={drink.id}>{drink.name}</li>)}
          </ul>
        </li>
        <li>
          <h3>Snacks</h3>
          <ul>
            {snacks !== null &&
              snacks.map((snack) => <li key={snack.id}>{snack.name}</li>)}
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

import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import AddFavorite from '../AddFavorite/AddFavorite'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { Switch, Route } from "react-router-dom";


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBau2l_7JBEKCQhXqRJXel3K_m0Cyu_Qes",
    authDomain: "h3-firestore.firebaseapp.com",
    projectId: "h3-firestore",
    storageBucket: "h3-firestore.appspot.com",
    messagingSenderId: "840794726230",
    appId: "1:840794726230:web:75af9fae2e3bbd300d80f7",
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()

  const [meals, setMeals] = useState(null);
  const [drinks, setDrinks] = useState(null);
  const [snacks, setSnacks] = useState(null);

  const mealsdb = collection(db, 'meals');
  const drinksdb = collection(db, "drinks");
  const snacksdb = collection(db, "snacks");



  function getMealsFromDb() {
    getDocs(mealsdb)
      .then((snapshot) => {
        let mealsArr = [];
        snapshot.docs.forEach((doc) => {
          mealsArr.push({ ...doc.data(), id: doc.id });
        });
        setMeals(mealsArr);
        //console.log(mealsArr);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getDrinksFromDb() {
    getDocs(drinksdb)
      .then((snapshot) => {
        let drinksArr = [];
        snapshot.docs.forEach((doc) => {
          drinksArr.push({ ...doc.data(), id: doc.id });
        });
        setDrinks(drinksArr);
        //console.log(drinksArr);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function getSnacksFromDb() {
    getDocs(snacksdb)
      .then((snapshot) => {
        let snacksArr = [];
        snapshot.docs.forEach((doc) => {
          snacksArr.push({ ...doc.data(), id: doc.id });
        });
        setSnacks(snacksArr);
        //console.log(snacksArr);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function addNewItem(category, newItemName) {
    if (category === 'meals'){
      let timestamp = Date.now().toString()
      setDoc(doc(db, "meals", timestamp), {
        id: timestamp,
        name: newItemName,
      }).then(() => {
        getMealsFromDb();
      });
    } else if (category === 'drinks'){
      let timestamp = Date.now().toString();
      setDoc(doc(db, "drinks", timestamp), {
        id: timestamp,
        name: newItemName,
      }).then(() => {
        getDrinksFromDb();
      });
    } else if (category === 'snacks'){
      let timestamp = Date.now().toString();
      setDoc(doc(db, "snacks", timestamp), {
        id: timestamp,
        name: newItemName,
      }).then(() => {
        getSnacksFromDb();
      });
    }
    //console.log(category, newItemName);
  }

  function deleteItem(category, id){
    deleteDoc(doc(db, category, id))
    .then(() => {
      console.log('deleted')
      getMealsFromDb();
      getDrinksFromDb();
      getSnacksFromDb();
    })
    //console.log(id, category)
  }

  function updateItem(category, id, name) {
    if (category === 'meals'){
      updateDoc(doc(db, "meals", id), {name}).then(() => {
        console.log("updated")
        getMealsFromDb();
      })
    }
  }


  useEffect(() => {
    getMealsFromDb();
    getDrinksFromDb();
    getSnacksFromDb();
  }, []);


  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/addfavorite">
            <AddFavorite addNewItem={addNewItem} />
          </Route>
          <Route path="/">
            <Home
              drinks={drinks}
              meals={meals}
              snacks={snacks}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

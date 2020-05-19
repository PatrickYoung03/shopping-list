import React from "react";
import "./App.css";
import Input from "../input";
import List from "../list";
import DeleteButton from "../delete";

import { usePersistentState } from "../../libs/usePersistentState";

function App() {
  const [shoppingList, setShoppingList] = usePersistentState([]);

  function renderListItem(newInput) {
    setShoppingList([...shoppingList, { name: newInput, completed: false }]);
  }

  function deleteList() {
    setShoppingList([]);
  }

  function toggleComplete(i) {
    // get a new item,
    const newItem = {
      name: shoppingList[i].name,
      completed: !shoppingList[i].completed
    };
    // set completed to true
    const newList = [
      ...shoppingList.slice(0, i),
      newItem,
      ...shoppingList.slice(i + 1)
    ];

    setShoppingList(newList);
    // make new list
    // spread list at (...0, i + newItem, + ... i + 1)
  }

  function handleDelete(i) {
    setShoppingList([
      ...shoppingList.slice(0, i),
      ...shoppingList.slice(i + 1)
    ]);
  }

  return (
    <>
      <div className="App">
        <div className="title">
          <h1>STUFF TO BUY:</h1>
        </div>
        <div className="input">
          <Input renderListItem={renderListItem} />
        </div>
        <div className="list">
          <List
            toggleComplete={toggleComplete}
            shoppingList={shoppingList}
            handleDelete={handleDelete}
          />
        </div>
        <div className="delete">
          <DeleteButton deleteList={deleteList} />
        </div>
      </div>
    </>
  );
}

export default App;

//1.
// create an input compenent, import app.js
// render onto to DOM
// hand down a function that allowd us to render a li, as a prop (to LIST)

//2.
// create a listitem component, import
// render onto to DOM
// map through shopplingList state, render all items on to DOM as

//3.
// create a delete button, import
// render onto to DOM
// use function to setState to []
// onClick in delete componenet should call deleteList()

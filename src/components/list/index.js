import React from "react";
import "./list.css";
import ListItem from "../listItem/listitem.js";
import DeleteItem from "../deleteItem/deleteItem";

function List({ shoppingList, toggleComplete, handleDelete }) {
  return (
    <ul className="container">
      {shoppingList.map((item, i) => {
        return (
          <>
            <li>
              <ListItem toggleComplete={() => toggleComplete(i)} item={item} />
            </li>
            <DeleteItem handleDelete={() => handleDelete(i)} />
          </>
        );
      })}
    </ul>
  );
}

export default List;

// docsntruct shopping list
// map through array and render each item in array to a an li as part of a ul
// export

// create new component for listitem
// set state in list to be checked for each individual item on list
// give li a className of Checked, setState to change between true and false
// import ListItem to List, to attach it

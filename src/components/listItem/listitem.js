import React, { useState } from "react";

function ListItem({ item, toggleComplete }) {
  //const [complete, setComplete] = useState(false);

  return (
    <>
      <div
        onClick={toggleComplete}
        className={item.completed ? "checked" : null}
      >
        {item.name}
      </div>
    </>
  );
}

export default ListItem;

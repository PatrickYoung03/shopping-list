import React from "react";

function DeleteButton({ deleteList }) {
  return <button onClick={deleteList}>Clear List 🚫</button>;
}

export default DeleteButton;

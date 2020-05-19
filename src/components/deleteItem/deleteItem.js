import React from "react";

function DeleteItem({ handleDelete }) {
  return <div onClick={handleDelete}>❌</div>;
}

export default DeleteItem;

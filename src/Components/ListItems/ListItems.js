import React from "react";

const ListItems = ({ listItems, handleDelete }) => {
  return (
    <div>
      <h2> List Tasks </h2>
      {listItems.map((el, i) => (
        <ul>
          <li> {el}</li>
          <button onClick={() => handleDelete(i)}> delete </button>
        </ul>
      ))}
    </div>
  );
};

export default ListItems;

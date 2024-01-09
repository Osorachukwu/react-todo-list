import React from "react";
 // import { FaTrashAlt } from "react-icons/fa";
 import ItemList from "./ItemList";

function Content({ items, handleCheck, handleDelete }) {

 return (
    <div className="text-2xl">
      {items.length ? (
        <ItemList 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
       
        ) : (
          <p className="text-4xl font-bold text-center mt-60">Your list is empty</p>
        )}
    </div>
  );
}

export default Content;

import React from "react";

function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li className="flex gap-1 bg-gray-300 mb-1">
      <input
        className="w-10"
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        // ☝to collect the id of the clicked item as an argument to the function parameter
        checked={item.checked}
        // ☝ calling the the checked property from the array
      />
      <label
        className="flex-1 bg-red-400"
        style={{textDecoration: item.checked && 'line-through'}}
        // ☝conditionally setting the line-through style. Can also be done using the tennary
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <div onClick={() => handleDelete(item.id)} className="cursor-pointer">🗑</div>
    </li>
  );
}

export default LineItem;

import React, { useRef } from "react";

function AddItem({ newItem, setNewItem, handleSubmit }) {
    const inputRef = useRef();
  return (
    <form className="flex justify-between" onSubmit={handleSubmit}>
      <label className="hidden" htmlFor="addItem">Add Item</label>
      <input
      className="text-2xl outline-none border-2 border-gray-600 flex-1"
      ref={inputRef}
        type="text"
        placeholder="Add Item..."
        id="addItem"
        autoFocus
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button className="bg-blue-600 w-9" type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}>➕</button>
    </form>
  );
}

// The whole useRef thing is there to return the focus from the button to the input field 
// ref={inputRef}
// onClick={() => inputRef.current.focus()}

export default AddItem;

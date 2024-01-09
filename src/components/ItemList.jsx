import React from 'react'
import LineItem from './LineItem'

function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <ul>
          {items.map((listItem) => (
            <LineItem 
            key={listItem.id}
            item={listItem}
            handleCheck={handleCheck}
            handleDelete={handleDelete}/>
          ))}
        </ul>
  )
}

export default ItemList
import Header from "./components/header";
import Content from "./components/Content";
import Footer from "./components/Footer";
//import Wahala from './components/Wahala';
import Listkeys from "./components/Listkeys";
import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import SearchItem from "./components/SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );

  const [newItem, setNewItem] = useState("");
  // container for the input

  const [search, setSearch] = useState("");
  //☝ input for search

  useEffect(()=> {
    console.log('render')
  }, [])

  function setAndSaveItems(newItems) {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  }
  // local storage function💥

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };
  // ☝ recives a parameter
  // first line basically just gets the id of the last item in the list and increments it by one (+1) for the new item coming in
  // second line myNewItem gets that new incremented id and checked property of false (intialy) and also the item created newly
  // Thrid line creates a new array to update the items state with,  by spreading it alongside myNewItem

  function handleCheck(id) {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    setAndSaveItems(listItems);
  }
  // ☝basically we create a new array by mapping through the items state, then check through the items to see which has an equivalent id to the one we have recived from the onChange(the function parameter-id). Then spread that curr ent item and access the checked property(status) and make it the oposite of what it currently is, but if not simply return the item the way it is..
  // Finally use setItems to update the items array to listItems

  function handleDelete(id) {
    const listItems = items.filter((items) => items.id !== id);
    setItems(listItems);
    setAndSaveItems(listItems);
  }
  // Using sort method to delete an item

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  }
  // first line prevents default reload of page
  // second makes sure that white spaces(empty input) won't be submitted
  // third empties the input field after submit

  return (
    <section className="w-[800px]  mt-10">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        // ☝this line filters the items according to what is typed inisde the search input which it converts lowercase ????
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer lenght={items.length} />
    </section>
  );
}

export default App;

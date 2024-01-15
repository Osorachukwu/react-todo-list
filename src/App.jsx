import Header from "./components/header";
import Content from "./components/Content";
import Footer from "./components/Footer";
//import Wahala from './components/Wahala';
import Listkeys from "./components/Listkeys";
import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import SearchItem from "./components/SearchItem";
import apiRequest from "./apiRequest";

function App() {
  const API_URL = 'http://localhost:3500/items';

  // const [info, setInfo] =useState([])

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");
  // container for  the input

  const [search, setSearch] = useState("");
  //☝ input for search

  const [fetchError, setFetchError] =useState(null);
  //☝ this is for error handling

  const [isLoading, setIsloading] =useState(true);
  //for the loading message / spinner

  useEffect(()=> {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw Error('Did not recieve expected data') //if res is not ok  throw this error
        const listItems = await res.json();
        setItems(listItems);
        setFetchError(null); //making sure this remains null if there is no error
      } catch (err) {
        setFetchError(err.message)//passing the err message into state
      } finally {
        setIsloading(false); //set to false whether the outcome is error or not
      }
    }

    (async () => await fetchItems())(); //check this line on chatgpt.. also simple fetchItems() can be used here
  }, []);
  // 👇inplementing the loading message/spinner
  // {isLoading &&  <p>Loading...</p> }
  // 👇inplementing the error message
  // {fetchError && <p className="text-red-500">{`Error: ${fetchError}`}</p>}
  //Note: try runs for the resolve, catch for reject and finally runs either way
  

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

    const postOptions = {
      m
    }
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

      <main className="text-2xl">
        {isLoading &&  <p>Loading...</p> }
        {fetchError && <p className="text-red-500">{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content //👈if there is no error & no loading display these👇. This makes sure that the "empty list" message is not displayed..
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          // ☝this line filters the items according to what is typed inisde the search input which it converts lowercase ????
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer lenght={items.length} />
    </section>
  );
}

export default App;
//Note I am using the main tag on Content component because I want to do that error thing(expression) there. So instead of having the main tag in the component itself I used a fragment.

JSX provides a template for the component layout

Styled component is a popular package used for react styling... styled-components.com 👈for instalation and usage  

Default prop is the prop that get used by your component when you dont provid any prop..

???Just like class is a reserved keyword in react and therefore reolaced by classname for attribute for form elements is replaced with htmlFor='' ???

??arial-label='Add Item' is used on  buttons when icons are used on the buttons instead of text, I think its for the screen readers??

??role??

???includes???

???still consult chat gpt on that filter part

useRef 2:36

useEffect runs on each render / re-render but with the dependency array it on runs once on initial-render(load-time). If there is an item inside the dependency array, useEffect now looks at that and runs each time the is a change on that dependency-item. Use effect is asynchronious in nature so it runs after everything else has rendered.

 useEffect(()=> {
    console.log('render')
  });
  ☝This will run with each re-render cos there is no depency array

 useEffect(()=> {
    console.log('render')
  }, []);
☝this will run only once cos there is an empty dependency array

 useEffect(()=> {
    console.log('render')
  }, [form]);
  ☝if there is a dependency e.g form state then useEffect will run when there is a change on that state(something is typed inisde). That is if you want it to run when something specific changes..


CRUD OPERATIONS JSON SERVER

REACT js CRUD (Create, Read, Update, Delete) Operations...
first inplementation
Read is the same as normal fetching of data from an API
Create, create a json file (preferably)inside the public folder and fetch normally, only this time you'll have something like this fetch('/check.json')

second inplementation
3:30 JSON Server, search for json-server at npmjs.com the documentation for it is also there. 
For the installation instead of the npm i json-server(which adds json as a dependency) which is on the docs,  use npx json-server -p 3500 -w data/db.json(just lunch and work with it). So the -p 3500 port, -w means watch. 
Copy the link on the "Endpoints" or "Resources" (http://localhost:3500/items) provided and open that on you chrom tab. That is also the root url that you'll be contacting using the fetch api.

The folder(data) for the json files(data.json / db.json) is usually created on the topmost level of the file tree.. 

And to create that connection you have to run that npx thing again ???

For the rest of the CRUD operations...
We'll be using one function for create, update and delete
in the src folder create an apiRequest.js file 






1:57
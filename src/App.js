import { useState } from "react";

const arrayOfObjects = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    city: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    city: "Chicago",
  },
  {
    id: 4,
    name: "Alice Brown",
    age: 28,
    city: "San Francisco",
  },
];

// props
function App() {
  const [persons, setPersons] = useState(arrayOfObjects);
  const [search, setSearch] = useState("");

  function handleSearchClick() {
    if (search) {
      // map --> array --> collection
      // filter --> array --> collection
      // find --> object --> individual
      const arrayCopy = persons.filter((i) => {
        return i.name.toLowerCase().includes(search.toLowerCase());
      });
      setPersons(arrayCopy);
    } else {
      setPersons(arrayOfObjects);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        onClick={() => {
          handleSearchClick();
        }}
      >
        search
      </button>

      {/* <div>{}</div> */}
      {/* {console.log()} */}
      {/* {array.map()} */}
      {persons.map((p) => {
        return (
          <div style={{ border: "1px solid black", margin: "10px 0px" }}>
            <div>{p.name}</div>
            <div>{p.age}</div>
            <div>{p.city}</div>
          </div>
        );
      })}
      {/* 1 card */}
      {/* values --> different */}

      {/* {arrayOfObjects.map((i) => {
        return (
          <>
            <Card name={i.name} age={i.age} />
          </>
        );
      })} */}
    </div>
  );
}

// parent --> child:header // props
// unidirectional
// reuse --> child component

// JSX --> javascript and xml
export default App;

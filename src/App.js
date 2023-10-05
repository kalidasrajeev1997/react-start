import { useState } from "react";
import { Header } from "./Header";

// props
function App() {
  const [count, setCount] = useState(1);

  function add() {
    console.log(count);
  }

  return (
    <>
      <Header countProp={count} setCountProp={setCount} plus={add} />{" "}
      <div>asdas</div>
    </>
  );
}

// parent --> child:header // props
// unidirectional
// reuse --> child component

// JSX --> javascript and xml
export default App;

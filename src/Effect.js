import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fffbb8;
`;

const Button = styled.button`
  background: ${(props) => (props.background ? props.background : "black")};
  color: ${(props) => (props.color ? props.color : "white")};
  padding: 15px 30px;
  border-radius: 30px;
  outline: none;
  border: none;
`;

const Span = styled.span`
  color: blue;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "24px")};
`;

// js in css

const todoList = [
  { title: "Learn React", done: false },
  { title: "Learn JS", done: false },
];

const Effect = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState("");
  const [list, setList] = useState(todoList);
  const [fontSize, setFontSize] = useState(true);
  //   const [t]

  //   useEffect(() => {
  //     setLoading(true);
  //     setFontSize(!fontSize);
  //     fetch(`https://api.quotable.io/quotes/random`)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setTodo(json);
  //         setLoading(false);
  //       });
  //   }, [count]);

  const handleCheck = (e, index) => {
    const listCopy = list;
  };

  if (loading) {
    return <Container>loading</Container>;
  } else {
    return (
      <Container>
        {/* <Button
          onClick={() => {
            setCount(count + 1);
          }}
          background={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        >
          change
        </Button>
        <Button
          className="asdas"
          style={{}}
          onClick={() => {
            setCount(count + 1);
          }}
          background={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        >
          change
        </Button>
        <div>
          {todo[0]?.content}
          <br />
          <Span fontSize={fontSize ? 12 : 24}>Author: {todo[0]?.author}</Span>
        </div> */}

        {/* {todo.length && todo[0].content} */}
        {/* {todo.length ? todo[0].content : null} */}
        <input
          value={todo}
          type="text"
          placeholder="enter todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={() => {
            setList([...list, { title: todo, done: false }]);
            setTodo("");
          }}
        >
          add
        </button>
        {list.map((t, index) => {
          return (
            <div>
              <input
                type="checkbox"
                defaultChecked={t.done}
                onChange={(e) => handleCheck(e, index)}
              />
              <span>{t.title}</span>
            </div>
          );
        })}
      </Container>
    );
  }

  //   return (
  //     <>
  //       {loading ? (
  //         <div>loading</div>
  //       ) : (
  //         <>
  //           <button
  //             onClick={() => {
  //               setCount(count + 1);
  //             }}
  //           >
  //             change
  //           </button>
  //           {todo[0]?.content}
  //           {todo.length && todo[0].content}
  //           {todo.length ? todo[0].content : null}
  //         </>
  //       )}
  //     </>
  //   );
};

export default Effect;

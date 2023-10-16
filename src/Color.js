import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const ingredients = ["Coffee", "Expresso"];
const coffee = "Coffee";
const coffee1 = "Coffeeasdklasjd";

ingredients.includes(coffee);
coffee1.includes(coffee); // true or false;

const Flex = styled.div`
  display: flex;
  gap: 20px;
`;
const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color};
  margin: 10px;
`;

const array = [
  { id: 1, selected: false },
  { id: 2, selected: false },
  { id: 3, selected: false },
  { id: 4, selected: false },
  { id: 5, selected: false },
  { id: 6, selected: false },
];

// const numbers = [1, 2, 3, 4];
// const square = numbers.map((i) => {
//   if (i % 2 === 0) {
//     return i * i;
//   }
//   return i;
// });

const Color = () => {
  const [color, setColor] = useState(array);
  const [view, setViewType] = useState("list");
  const navigate = useNavigate();

  const handleButtonChange = (id) => {
    const changed = color.map((clr) => {
      return clr.id === id ? { ...clr, selected: !clr.selected } : clr;
    });
    setColor(changed);
    navigate("/effect");
  };

  return (
    <>
      {view === "list" ? (
        <>
          <Flex>
            {color.map((i) => {
              return (
                <ColorBox key={i.id}>
                  <button onClick={() => handleButtonChange(i.id)}>
                    {i.id}.{i.selected ? "SELECTED" : "SELECT"}
                  </button>
                </ColorBox>
              );
            })}
            {/* {array.filter(().map(()))} */}
          </Flex>
          <button
            onClick={() => {
              setViewType("cart");
            }}
          >
            next
          </button>
        </>
      ) : null}
      {view === "cart" ? (
        <>
          {color
            .filter((i) => {
              return i.selected === true;
            })
            .map((i) => {
              return (
                <ColorBox key={i.id}>
                  <button onClick={() => handleButtonChange(i.id)}>
                    {i.id}.{i.selected ? "SELECTED" : "SELECT"}
                  </button>
                </ColorBox>
              );
            })}
          <button
            onClick={() => {
              setViewType("list");
            }}
          >
            back
          </button>
        </>
      ) : null}

      <Link to="/effect">hello</Link>
    </>
  );
};

export default Color;

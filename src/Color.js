import React, { useState } from "react";
import styled from "styled-components";

const ingredients = ["Coffee", "Expresso"];
const coffee = "Coffee";
const coffee1 = "Coffeeasdklasjd";

ingredients.includes(coffee);
coffee1.includes(coffee); // true or false;

const Flex = styled.div`
  display: flex;
`;
const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color};
  margin: 10px;
`;

const array = [
  { color: "#fcba03" },
  { color: "#b5199e" },
  { color: "#186322" },
];

const Color = () => {
  const [color, setColor] = useState(array);

  const handleColorChange = (e, index) => {
    const colorCopy = array.map((i, _index) => {
      if (_index === index) {
        return { color: e.target.value };
      }
      return i;
    });
    setColor(colorCopy);
  };

  return (
    <Flex>
      {color.map((i, index) => {
        return (
          <ColorBox color={i.color}>
            <input
              type="color"
              value={i.color}
              onChange={(e) => handleColorChange(e, index)}
            />
          </ColorBox>
        );
      })}

      {/* {array.filter(().map(()))} */}
    </Flex>
  );
};

export default Color;

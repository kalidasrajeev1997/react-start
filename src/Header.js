import styles from "./app.module.css";

// const
const array = [
  { name: "kalidas", age: 26, skills: ["html", "css", "js"] },
  { name: "aparna", age: 26, skills: ["js", "qe"] },
  { name: "jofin", age: 24, skills: ["html", "css", "js"] },
];

// filter age > 25, map, find, reduce
// array

// array.filter((e) => {
//   return e.name.includes(name); //true or false;
// });

array.map((i) => {
  return <div>{i.name}</div>;
});

const data = { name: "kalidas" };

const prop = "name";

const name = data[prop];

export const Header = (props) => {
  const { setCountProp, plus } = props;
  return (
    <div>
      <button
        onClick={() => {
          setCountProp((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCountProp((prev) => prev - 1);
        }}
      >
        -
      </button>
      {array
        .filter((i) => i.age > 26)
        .map((i) => {
          return <div>{i.name}</div>;
        })}
      {/* {array
        .filter((p) => p.age > 22)
        .map((person) => {
          return (
            <div className={styles["card-one"]}>
              <div>{person.name}</div>
              <div>{person.age}</div>
              <ul>
                {person.skills.map((s) => {
                  return <li>{s}</li>;
                })}
              </ul>
            </div>
          );
        })} */}
    </div>
  );
};

// page header

// export default Header;

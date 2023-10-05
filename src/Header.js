import styles from "./app.module.css";

const array = [
  { name: "kalidas", age: 26, skills: ["html", "css", "js"] },
  { name: "aparna", age: 26, skills: ["js", "qe"] },
  { name: "jofin", age: 24, skills: ["html", "css", "js"] },
];

const data = { name: "kalidas" };

const prop = "name";

const name = data[prop];

export const Header = (props) => {
  // const { countProp, setCountProp, plus } = props;
  return (
    <div>
      {/* <div>{countProp}</div>

      <button
        onClick={() => {
          plus();
          setCountProp(countProp + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCountProp(countProp - 1);
        }}
      >
        -
      </button> */}
      {array
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
        })}
    </div>
  );
};

// page header

// export default Header;

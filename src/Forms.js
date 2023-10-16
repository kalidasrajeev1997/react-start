import React, { useState } from "react";

// signup
// validations

// name - string
// email - email
// password - minimum 8 length
// username - string

const Forms = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ passwordError: false });
  const handleChange = (key, value) => {
    setLoginDetails({ ...loginDetails, [key]: value });
  };

  const handleOnClick = async () => {
    if (loginDetails.password.length < 8) {
      setError({ ...error, passwordError: true });
      return;
    } else {
      setError({ ...error, passwordError: false });
    }
    const response = await fetch("http://localhost:8000/signup", {
      method: "POST",
      body: JSON.stringify(loginDetails),
      headers: {
        "content-type": "application/json",
      },
    });
    const responseCopy = await response.json();
    console.log(responseCopy);
    setMessage(responseCopy.message);
  };

  return (
    <div style={{ margin: 10 }}>
      <div style={{ margin: 10 }}>
        <input
          value={loginDetails.username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            handleChange("username", e.target.value);
          }}
        />
      </div>
      <div style={{ margin: 10 }}>
        <input
          value={loginDetails.password}
          type="password"
          placeholder="password"
          onChange={(e) => {
            handleChange("password", e.target.value);
          }}
          style={{
            border: `1px solid ${error.passwordError ? "red" : "black"}`,
          }}
        />
        {error.passwordError ? "invalid password" : null}
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={handleOnClick}>Login</button>
      </div>
      {message}
    </div>
  );
};

export default Forms;

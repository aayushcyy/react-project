import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

//Sending Data from One Component to another using useContext API

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={userName}
      />{" "}
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

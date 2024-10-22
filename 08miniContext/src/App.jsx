import "./App.css";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import UserContextProvider from "./context/UserContextProvider";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Galax</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

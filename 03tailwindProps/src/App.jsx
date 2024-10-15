import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/cards";

function App() {
  const [count, setCount] = useState(0);
  let thisArr = [1, 2, 3, 4];
  const imgOneSource =
    "https://www.home-designing.com/wp-content/uploads/2015/11/ultra-luxurious-modern-interior.jpg";
  const imgTwoSrc = "https://i.ytimg.com/vi/zumJJUL_ruM/maxresdefault.jpg";
  return (
    <>
      <h1 className="bg-green-600 font-serif text-black p-4 rounded-md w-96 mb-4">
        Tailwind check by Aayush
      </h1>
      <Cards myArr={thisArr} imgSource={imgTwoSrc} price="$260,000" />
      <Cards price="$230,000" imgSource={imgOneSource} />
    </>
  );
}

export default App;

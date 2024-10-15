import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="m-10 py-2 px-7 w-full max-w-md mx-auto h-auto bg-blue-950 flex flex-col rounded-lg text-white">
        <h1 className="text-2xl mb-3 font-sans">Password Generator</h1>
        <div className="w-full flex overflow-hidden mb-4 rounded-xl">
          <input
            type="text"
            placeholder="Password"
            id="passwordInput"
            className="w-full outline-none py-1 px-3"
            readOnly
          />
          <button className="outline-none bg-orange-600 hover:bg-orange-700 text-white px-3 py-0.5">
            Copy
          </button>
        </div>
        <div className="w-full gap-3  flex justify-center">
          <div className="flex gap-2">
            <input
              type="range"
              id="lenght"
              min={6}
              max={50}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

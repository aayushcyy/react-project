import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000024");

  return (
    <div className="w-full h-screen p-1 " style={{ backgroundColor: color }}>
      <div className="px-2 inset-x-0 fixed flex flex-wrap justify-center bottom-12">
        <div
          className="flex flex-wrap justify-center gap-2 rounded-lg px-4 py-3"
          style={{ backgroundColor: "white" }}
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-3 py-2 text-white rounded-full shadow-2xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-3 py-2 text-white rounded-full shadow-2xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-3 py-2 text-white rounded-full shadow-2xl"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("#D79FC7")}
            className="outline-none px-3 py-2 text-white rounded-full shadow-2xl"
            style={{ backgroundColor: "#D79FC7" }}
          >
            Elsie
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-3 py-2 rounded-full shadow-2xl"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-3 py-2 text-white rounded-full shadow-2xl"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("#6F4E37")}
            className="outline-none px-3 py-2 text-white rounded-full shadow-2xl"
            style={{ backgroundColor: "#6F4E37" }}
          >
            Coffee
          </button>
          <button
            onClick={() => setColor("#000024")}
            className="outline-none px-3 py-2 text-white rounded-full shadow-2xl"
            style={{ backgroundColor: "#000024" }}
          >
            Default
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

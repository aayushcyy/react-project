import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    const num = "0123456789";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (allowNum) {
      str += num;
    }
    if (allowChar) {
      str += "@#$%&*+=";
    }
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, allowChar, allowNum]);

  const passwordCopied = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, allowChar, allowNum, passGenerator]);

  return (
    <>
      <div className="flex flex-col w-full max-w-md mx-auto gap-3 py-4 shadow-md rounded-lg px-4 my-8  text-2xl bg-gray-700">
        <h1 className="text-white">Password Generator</h1>
        <div className="flex shadow  rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full text-orange-600 py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={passwordCopied}
            className="text-orange-700 shadow-xl hover:bg-blue-900 outline-none bg-blue-950 py-0.5 px-3 text-center font-medium shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="w-full flex gap-4 text-sm">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={60}
              value={length}
              className="cursor-pointer"
              //understand this line with gpt
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white text-md">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100"
              defaultChecked={allowNum}
              id="numberInput"
              onChange={() => {
                //understand this line with gpt
                setAllowNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-white text-md">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100"
              defaultChecked={allowChar}
              id="characterInput"
              onChange={() => {
                //understand this line with gpt
                setAllowChar((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="text-white text-md">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

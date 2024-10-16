import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(6);
  const [showAlert, setShowAlert] = useState(false);

  const passGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (numAllowed) {
      str += "01234567894651231";
    }
    if (charAllowed) {
      str += "@#$%&*+=_!-?";
    }
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  console.log(password);
  useEffect(() => {
    passGenerator();
  }, [length, numAllowed, charAllowed, passGenerator]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  return (
    <>
      <div className="m-10 py-2 px-6 w-full max-w-md mx-auto h-auto bg-blue-950 flex flex-col rounded-lg text-white">
        <h1 className="text-2xl mb-3 font-sans">Password Generator</h1>
        <div className="w-full flex overflow-hidden mb-4 rounded-xl">
          <input
            type="text"
            placeholder="Password"
            id="passwordInput"
            className="w-full outline-none py-1 px-3 text-orange-600 text-lg font-normal"
            readOnly
            value={password}
          />
          <button
            id="copybtn"
            onClick={copyPassword}
            className="outline-none bg-orange-600 hover:bg-orange-700 text-white px-3 py-0.5"
          >
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
              defaultValue={6}
              className="cursor-pointer w-28"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="lenght">Length: {length}</label>
          </div>
          <div className="flex justify-center text-center gap-2 ">
            <input
              type="checkbox"
              id="numberAllowed"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
              className="cursor-pointer "
            />
            <label htmlFor="numberAllowed">Numbers</label>
          </div>
          <div className="flex justify-center text-center gap-2 ">
            <input
              type="checkbox"
              id="charAllowed"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="charAllowed">Characters</label>
          </div>
        </div>
      </div>
      {showAlert && (
        <div className="w-full max-w-md mx-auto">
          <p className="text-orange-600 text-sm" id="alert">
            Password Copied
          </p>
        </div>
      )}
    </>
  );
}

export default App;

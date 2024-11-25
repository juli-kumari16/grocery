import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./page/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Header /> */}
        <Home />
      </div>
    </>
  );
}

export default App;

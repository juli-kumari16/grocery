import { useState } from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
// import Header from "./components/Header";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Page from "./page/Page"; // Added missing import for Page component

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Page" element={<Page />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

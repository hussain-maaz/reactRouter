import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="bg-green-300">React-Router-DOM</h1> */}
      {/* <Header />
      <Home />
      <Footer /> */}
    </>
  );
}

export default App;

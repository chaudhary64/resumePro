import React from "react";
import Nav from "./Nav/Nav";
import Home from "./Pages/Home";
import { ReactLenis } from "lenis/react";

const App = () => {
  return (
    <>
      <ReactLenis root>
        <Nav />
        <Home />
      </ReactLenis>
    </>
  );
};

export default App;

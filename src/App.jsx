import React from "react";
import { ReactLenis } from "lenis/react";
import Home from "./Pages/Home";
// import NavigationRoutes from "./Router/NavigationRoutes";

const App = () => {
  return (
    <>
      <ReactLenis root>
        {/* <NavigationRoutes /> */}
        <Home />
      </ReactLenis>
    </>
  );
};

export default App;

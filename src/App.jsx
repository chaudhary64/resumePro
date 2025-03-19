import React from "react";
import { ReactLenis } from "lenis/react";
import Routes from "./Router/NavigationRoutes";

const App = () => {
  return (
    <>
      <ReactLenis root>
        <Routes />
      </ReactLenis>
    </>
  );
};

export default App;

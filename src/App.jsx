import React from "react";
import { ReactLenis } from "lenis/react";
import Routes from "./Components/Router/NavigationRoutes";

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

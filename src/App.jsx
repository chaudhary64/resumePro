import React from "react";
import { ReactLenis } from "lenis/react";
import NavigationRoutes from "./Router/NavigationRoutes";

const App = () => {
  return (
    <>
      <ReactLenis root>
        <NavigationRoutes />
      </ReactLenis>
    </>
  );
};

export default App;

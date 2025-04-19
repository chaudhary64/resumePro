import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import ProtectedPage from "./ProtectedPage.jsx";
import Resume from "./Components/Resume.jsx";
import Context from "./Context/Context.jsx";
import About from "./Pages/About.jsx";
import Terms from "./Pages/Terms.jsx";
import Contact from "./Pages/Contact.jsx";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <App />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/sign-in/*"
          element={
            <>
              <div className="min-h-screen flex justify-center items-center">
                <SignIn
                  fallbackRedirectUrl={"/"}
                  routing="path"
                  path="/sign-in"
                />
              </div>
            </>
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <SignUp fallbackRedirectUrl={"/"} routing="path" path="/sign-up" />
          }
        />
        <Route
          path="/:id"
          element={
            <>
              <SignedIn>
                <Resume />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <SignedIn>
                <About />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <SignedIn>
                <Terms />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <SignedIn>
                <Contact />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <Context>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </Context>
);

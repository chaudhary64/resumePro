import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import ProtectedPage from "./ProtectedPage.jsx";

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
        {/* <Route
          path="/protected"
          element={
            <>
              <SignedIn>
                <ProtectedPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        /> */}
      </Routes>
    </ClerkProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClerkWithRoutes />
  </BrowserRouter>
);

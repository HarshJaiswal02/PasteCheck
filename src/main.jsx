import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Paste from "./components/Paste.jsx";
import ViewPaste from "./components/ViewPaste.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddVideo from "./pages/AddVideo.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/addvideo", element: <AddVideo /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

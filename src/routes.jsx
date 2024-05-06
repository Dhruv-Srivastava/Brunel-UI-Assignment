import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Registration from "./pages/Registration";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Registration /> },
]);
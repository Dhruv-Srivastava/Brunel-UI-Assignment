import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
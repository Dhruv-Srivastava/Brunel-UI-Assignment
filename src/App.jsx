import { Route, Routes, useLocation } from "react-router";

import Home from "./pages/Home";
import Registration from "./pages/Registration";

export default function App() {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

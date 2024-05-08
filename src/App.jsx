import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.9 }}
        className="main-container"
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 0 100%, 0% 100%, 0% 0%)",
            height: 0,
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            height: "100%",
          },
          exitState: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"},
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

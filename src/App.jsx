import React, { useEffect, useState } from "react";
import GlowCircle from "./components/GlowCircle";
import Loader from "./components/Loader";
import { motion } from "framer-motion";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/project-archive/Main";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3800);
  }, []);

  if (loading) {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader />
      </div>
    );
  } else {
    return (
      <>
        <Router>
          <div className="bg-[#0f172a]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <GlowCircle />

              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/projects" element={<Main />} /> */}
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </motion.div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;


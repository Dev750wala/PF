import React, { useEffect, useState } from "react";
// import Left_Div from "./components/Left/Left_Div";
// import Right_Div from "./components/Right/Right_Div";
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
        </Router>
      </>
    );
  }
}

export default App;

// mt-24 lg:mt-28

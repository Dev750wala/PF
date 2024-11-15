import React, { useEffect, useState } from 'react';
import Left_Div from './components/Left/Left_Div';
import Right_Div from './components/Right/Right_Div';
import GlowCircle from './components/GlowCircle';
import Loader from './components/Loader';
import { motion } from 'framer-motion';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loader />
      </div>
    );
  }
  else {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GlowCircle />
          <div className="container mx-auto flex flex-col lg:flex-row justify-between mt-24 lg:mt-28 lg:px-20 bg-transparent">
            <Left_Div />
            <Right_Div />
          </div>
        </motion.div>
      </>
    );
  }

}

export default App;


// mt-24 lg:mt-28
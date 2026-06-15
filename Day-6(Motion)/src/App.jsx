import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion, scale } from "motion/react";

function App() {
  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 500,
    },
  };

  const containerVariant = {
    hidden: { },
    visible: { }
  }

  const [show, setShow] = useState(false);

  return (
    <>
      <motion.button
      onClick={() => {setShow(prev => !prev)}}
      >Click Me</motion.button>

      <AnimatePresence>
        {show && <motion.div
          initial={{opacity: 0, y: 200}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          exit={{opacity: 0, y: 200}}         
          className="box"></motion.div>}
      </AnimatePresence>

      {/* <motion.div className="containerDiv" variants={containerVariant}
        initial="hidden"
        animate="visible"
        transition={{staggerChildren: 0.1}}
        >
        <motion.div
          variants={boxVariants}
          transition={{ duration: 1, ease: "easeInOut"}}
          //  whileHover={{scale: 1.2}}
          //  whileTap={{scale: 0.8}}
          //  viewport={{once: false, amount: 0.5}}
          //  whileInView={{opacity: 1, scale: 1}}
          className="box"
        ></motion.div>

        <motion.div
          variants={boxVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="box"
        ></motion.div>

        <motion.div
          variants={boxVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="box"
        ></motion.div>

        <motion.div
          variants={boxVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="box"
        ></motion.div>
      </motion.div> */}
    </>
  );
}

export default App;

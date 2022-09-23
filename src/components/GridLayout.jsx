import { motion } from "framer-motion";
import { useState } from "react";

const GridLayout = ({ visibility }) => {
  const [expandedElement, setExpandedElement] = useState(null);
  const [previousElementId, setPreviousElementId] = useState(null);
  const expandElement = (e) => {
    const elementId = e.target.id;
    if (elementId === expandedElement) {
      setPreviousElementId(elementId);
      setExpandedElement(null);
      return;
    }
    setExpandedElement(elementId);
  };

  const variants = {
    AClass: {
      gridTemplateColumns:
        "[col1-start] 52% [col2-start] 15% [col3-start] 15% [col4-start] 15% [col4-end]",
      gridTemplateRows: "[row1-start] 90% [row2-start] 10% [row2-end]",
    },
    BClass: {
      gridTemplateColumns:
        "[col1-start] 9% [col2-start] 9% [col3-start] 9% [col4-start] 70% [col4-end]",
      gridTemplateRows: "[row1-start] 50% [row2-start] 50% [row2-end]",
    },
    CClass: {
      gridTemplateColumns:
        "[col1-start] 70% [col2-start] 9% [col3-start] 9% [col4-start] 9% [col4-end]",
      gridTemplateRows: "[row1-start] 10% [row2-start] 90% [row2-end]",
    },
    DClass: {
      gridTemplateColumns:
        "[col1-start] 9% [col2-start] 40% [col3-start] 40% [col4-start] 9% [col4-end]",
      gridTemplateRows: "[row1-start] 10% [row2-start] 90% [row2-end]",
    },
  };
  return visibility ? (
    <motion.div
      variants={variants}
      initial={{
        gridTemplateColumns:
          "[col1-start] 24% [col2-start] 24% [col3-start] 24% [col4-start] 24% [col4-end]",
        gridTemplateRows: "[row1-start] auto [row2-start] auto [row2-end]",
      }}
      animate={
        expandedElement === "A"
          ? "AClass"
          : expandedElement === "B"
          ? "BClass"
          : expandedElement === "C"
          ? "CClass"
          : expandedElement === "D"
          ? "DClass"
          : {
              gridTemplateColumns:
                "[col1-start] 24.5% [col2-start] 24.5% [col3-start] 24.5% [col4-start] 24.5% [col4-end]",
              gridTemplateRows:
                previousElementId !== "B" &&
                variants[`${previousElementId}Class`]?.gridTemplateRows,
            }
      }
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        staggerDirection: -1,
      }}
      exit={{
        gridTemplateColumns:
          "[col1-start] 35% [col2-start] 33% [col3-start] 30% [col3-end]",
        gridTemplateRows: " [row1-start] auto [row2-start] auto [row2-end]",
      }}
      id="container"
      className="w-screen h-screen grid p-8 gap-3 bg-[pink]"
      onClick={expandElement}
    >
      <div
        id="A"
        className="bg-[gray] rounded-lg p-5 text-2xl cursor-pointer a"
      >
        A
      </div>
      <div
        id="B"
        className="bg-[gray] rounded-lg p-5 text-2xl cursor-pointer b"
      >
        B
      </div>
      <div
        id="C"
        className="bg-[gray] rounded-lg p-5 text-2xl cursor-pointer c"
      >
        C
      </div>
      <div
        id="D"
        className="bg-[gray] rounded-lg p-5 text-2xl cursor-pointer d"
      >
        D
      </div>
    </motion.div>
  ) : null;
};

export default GridLayout;

// if (expandedElement) {
//   if (expandedElement === elementId) {
//     removeClass(elementId);
//     setExpandedElement(null);
//     return;
//   } else {
//     removeClass(expandedElement);
//     setExpandedElement(elementId);
//     addClass(elementId);
//   }
// }
// if (elementId) {
//   setExpandedElement(elementId);
//   addClass(elementId);
// }

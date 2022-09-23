import React, { useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import GridLayout from "./components/GridLayout";

const App = () => {
  const [pages, setPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      {pages.map((page, index) => (
        <GridLayout key={index} visibility={currentPage === index + 1} />
      ))}
    </>
  );
};

export default App;

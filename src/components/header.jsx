import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeButton, setActiveButton] = useState("createButton");
  return (
    <div className="py-5 mt-2" id="flash-creators-heading">
      <h2 className="text-4xl font-bold mb-6 text-white">Create Flashcard</h2>
      <Link
        to="/"
        onClick={() => setActiveButton("createButton")}
        className="relative px-4 py-3 mr-3 cursor-pointer text-gray-800 pb-3 font-medium"
      >
        Create New
        <span
          id="createButton"
          style={
            activeButton === "createButton" ? { width: "100%" } : { width: "0%" }
          }
        ></span>
      </Link>
      <Link
        to="/myflashcard"
        onClick={() => setActiveButton("FlashCardButton")}
        className="relative px-4 py-3 cursor-pointer text-gray-800 pb-3 font-medium"
      >
        My Flashcard{" "}
        <span
          id="FlashCardButton"
          style={
            activeButton === "FlashCardButton"
              ? { width: "100%" }
              : { width: "0%" }
          }
        ></span>
      </Link>
    </div>
  );
};

export default Header;

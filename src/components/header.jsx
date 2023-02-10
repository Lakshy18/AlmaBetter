import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div>
            <h2>Create Flashcard</h2>
            <Link to="/">Create New</Link>
            <Link to="myflashcard">My Flashcard</Link>
        </div>
    )
};

export default Header;
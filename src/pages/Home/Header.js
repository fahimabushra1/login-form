import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="flex flex-row justify-center font-bold text-lg text-red-800">
            <Link className="mr-10 " to="/">Home</Link>
            <Link className="mr-10" to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </nav>
    )
}

export default Header;
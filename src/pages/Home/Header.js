import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";


const Header = () => {
    const [user] = useAuthState(auth)

    const logout = () => {
        signOut(auth);
    };


    return (
        <nav className="flex flex-row justify-center font-bold text-lg text-red-800">
            <Link className="mr-10 " to="/">Home</Link>
            {
                user ?
                    <button onClick={() => logout()} className='text-red-800 text-decoration-none mr-10'>Sign out</button>
                    :
                    <Link className="mr-10" to="/login">Login</Link>
            }
            <Link to="/signup">Signup</Link>
        </nav>
    )
}

export default Header;
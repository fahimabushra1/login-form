import React from "react";
import Header from "../Home/Header";
// import auth from "../../firebase.init";


const Login = () => {
    return (
     <div>
        <Header></Header>
        <form className="flex flex-col mx-auto w-1/2 mt-20">
                <input className="w-1/2 mx-auto mb-4" type='text' name="email" id="email" placeholder="Your email address"></input>
                <input className="w-1/2 mx-auto" type='password' name="password" id="password" placeholder="password"></input>
            </form>
        </div>
    )
}

export default Login;
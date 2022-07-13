import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Header from "../Home/Header";


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    let errorElement;
    if (error) {
        return (
            errorElement = <p className="text-red-700">Error: {error.message}</p>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        navigate('/')
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        console.log(email)
        const password = e.target.password.value
        console.log(password)
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div>
            <Header></Header>
            <form onSubmit={handleSubmit} className="flex flex-col bg-red-500 p-10 mx-auto w-1/2 mt-20">
                <input className="w-1/2 mx-auto mb-4 pl-2" type='text' name="email" id="" placeholder="Your email address" required />
                <input className="w-1/2 mx-auto mb-6 pl-2" type='password' name="password" id="" placeholder="password" required />
                <input type="submit" className="w-20 mx-auto rounded outline outline-4 outline-white text-white" value="login" />
                {errorElement}
            </form>
        </div>
    )
}

export default Login;
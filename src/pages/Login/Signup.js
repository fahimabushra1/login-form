import React from "react";
import Header from "../Home/Header";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/')
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmedPassword = e.target.confirmedPassword.value
        createUserWithEmailAndPassword(email, password)

    }



    return (
        <div>
            <Header></Header>
            <form onSubmit={handleSubmit} className="flex flex-col mx-auto w-1/2 mt-20 p-10 bg-sky-100">
                <input className="w-1/2 mx-auto mb-4" type='text' name="name" id="" placeholder="Your name" required />
                <input className="w-1/2 mx-auto mb-4" type='text' name="email" id="" placeholder="Your email address" required />
                <input className="w-1/2 mx-auto mb-4" type='password' name="password" id="" placeholder="password" required />
                <input className="w-1/2 mx-auto mb-4" type='confirmedPassword' name="confirmedPassword" id="" placeholder="confirmed password" required />
                <input type="submit" className="w-20 mx-auto rounded outline outline-4 outline-red-800/80" value="signup" />
            </form>
        </div>
    )
}

export default Signup;
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { Authcontxt } from "../Providers/AuthProviders";


const LogIn = () => {
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setSucess] = useState('');

    const userLogIn = () => {
        toast("Welcome Back !!");
    }
    const { logInUser, logInwithGoogle } = useContext(Authcontxt);

    const handleLogIn = evnt => {
        evnt.preventDefault();
        const email = evnt.target.email.value;
        const password = evnt.target.password.value;
        console.log(email, password);
        setSucess('');
        setLoginError('');
        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                evnt.target.reset();
                setSucess("Welcome !!");
                userLogIn();
            })
            .catch(error => {
                console.error(error.message);
                setLoginError("Doesn't Match");
            })
    }

    const handleGoogleSignIn = event => {
        event.preventDefault();
        setSucess('');
        setLoginError('');
        logInwithGoogle()
            .then(result => {
                console.log(result.user);
                setSucess('Welcome !!');
                userLogIn();
            })
            .catch(error => {
                console.error(error);
                setLoginError("Not Registred");
            })
    }

    return (
        <div className="bg-gradient-to-r from-violet-500 to-slate-400">
            <div className=" py-5 px-10 w-full grid grid-cols-2 gap-5">
                <form onSubmit={handleLogIn}>
                    <div>
                        <div className="form-control  gap-3 m-3">

                            <span className="font-bold text-slate-900 text-xl">Email</span>

                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control  gap-3 m-3">
                            <span className="font-bold text-slate-900 text-xl">Password</span>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control m-3">
                            <div className="mb-4 flex gap-5">
                                <p className=" text-slate-950">Not a member ? <Link to="/signup" className="font-bold animate-pulse">Sign Up</Link> here.</p>
                                <div>
                                    {
                                        loginError && <p className="text-red-300">{loginError}</p>
                                    }
                                    {
                                        loginSuccess && <p className="text-lime-500">{loginSuccess}</p>
                                    }
                                </div>
                            </div>
                            <button className="btn hover:bg-violet-500 hover:text-white ">LOG IN</button>
                        </div>
                    </div>
                </form>
                <div className=" grid grid-cols-4 p-2 gap-2 items-center">
                    <img className="rounded-tl-lg" src="https://i.ibb.co/XScvv3S/horror1.png" alt="" />
                    <img src="https://i.ibb.co/VND3wv6/comic1.png" alt="" />
                    <img src="https://i.ibb.co/NKy6r9Y/history1.png" alt="" />
                    <img className="rounded-tr-lg" src="https://i.ibb.co/3Y1ntxZ/tech1.png" alt="" />
                    <button onClick={handleGoogleSignIn} className="col-span-4 btn hover:bg-violet-500 hover:text-white ">Log In with<FcGoogle></FcGoogle></button>
                </div>

            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default LogIn;
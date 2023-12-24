import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontxt } from "../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const [supError, setSupError] = useState('');
    const [succes, setSucess] = useState('');
    const { createUser } = useContext(Authcontxt);

    const userSignUp = () => {
        toast("Congratulation !!");
    }
    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const imgurl = event.target.imgurl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            setSupError("At least 6 characters");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSupError("At least an UpperCase");
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setSupError("At least a Special Character");
            return;
        }
        setSucess('');
        setSupError('');

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                event.target.reset();
                setSucess('Amazing!');
                userSignUp();
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: imgurl,
                })
                    .then(() => console.log('Ok'))
                    .catch(() => console.log('error'))
            })
            .catch(error => {
                console.error(error);
                setSupError('Already in Use');
            })
    }
    return (
        <div className="bg-gradient-to-r from-violet-500 to-slate-400">
            <div className=" py-5 px-10 w-full grid grid-cols-2 gap-5">
                <form onSubmit={handleSignUp}>
                    <div>
                        <div className="form-control  gap-3 m-3">

                            <span className="font-bold text-slate-900 text-xl">Name</span>

                            <input type="text" name="name" placeholder="user name" className="input input-bordered" required />
                        </div>
                        <div className="form-control  gap-3 m-3">

                            <span className="font-bold text-slate-900 text-xl">Image</span>

                            <input type="text"
                                name="imgurl" placeholder="img url" className="input input-bordered" required />
                        </div>
                        <div className="form-control  gap-3 m-3">

                            <span className="font-bold text-slate-900 text-xl">Email</span>

                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control  gap-3 m-3">
                            <span className="font-bold text-slate-900 text-xl">Password</span>
                            <input type="password"
                                name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control m-3">
                            <div className="mb-4 flex gap-5">
                                <p className=" text-slate-950">Have an account ? <Link to="/login" className="font-bold animate-pulse">Log In</Link> here.</p>
                                <div>
                                    {
                                        supError && <p className="text-red-300">{supError}</p>
                                    }
                                    {
                                        succes && <p className="text-lime-500">{succes}</p>
                                    }
                                </div>
                            </div>
                            <button className="btn hover:bg-violet-500 hover:text-white ">SIGN UP</button>
                        </div>
                    </div>
                </form>
                <div className="grid grid-cols-3 p-2 gap-2 items-center">
                    <img className="rounded-l-lg" src="https://i.ibb.co/QDBKQsy/fiction1.png" alt="" />
                    <img src="https://i.ibb.co/F0L0Yzs/horor2.png" alt="" />
                    <img className="rounded-r-lg" src="https://i.ibb.co/BKg6xfY/history2.png" alt="" />

                </div>

            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default SignUp;
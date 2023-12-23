import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const LogIn = () => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-slate-400">
            <div className=" py-5 px-10 w-full grid grid-cols-2 gap-5">
                <form >
                    <div>
                        <div className="form-control  gap-3 m-3">

                            <span className="font-bold text-slate-900 text-xl">Email</span>

                            <input type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control  gap-3 m-3">
                            <span className="font-bold text-slate-900 text-xl">Password</span>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control m-3">
                            <span className="mb-4 text-slate-950">Not a member ? <Link to="/signup" className="font-bold animate-pulse">Sign Up</Link> here.</span>
                            <button className="btn hover:bg-violet-500 hover:text-white ">LOG IN</button>
                        </div>
                    </div>
                </form>
                <div className=" grid grid-cols-4 p-2 gap-2 items-center">
                    <img className="rounded-tl-lg" src="https://i.ibb.co/XScvv3S/horror1.png" alt="" />
                    <img src="https://i.ibb.co/VND3wv6/comic1.png" alt="" />
                    <img src="https://i.ibb.co/NKy6r9Y/history1.png" alt="" />
                    <img className="rounded-tr-lg" src="https://i.ibb.co/3Y1ntxZ/tech1.png" alt="" />
                    <button className="col-span-4 btn hover:bg-violet-500 hover:text-white ">Log In with<FcGoogle></FcGoogle></button>
                </div>

            </div>

        </div>
    );
};

export default LogIn;
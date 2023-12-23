import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-slate-400">
            <div className=" py-5 px-10 w-full grid grid-cols-2 gap-5">
                <form >
                    <div>
                        <div className="form-control  gap-3 m-3">

                            <span className="font-bold text-slate-900 text-xl">Name</span>

                            <input type="text" placeholder="user name" className="input input-bordered" required />
                        </div>
                        <div className="form-control  gap-3 m-3">

                            <span className="font-bold text-slate-900 text-xl">Image</span>

                            <input type="text" placeholder="img url" className="input input-bordered" required />
                        </div>
                        <div className="form-control  gap-3 m-3">

                            <span className="font-bold text-slate-900 text-xl">Email</span>

                            <input type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control  gap-3 m-3">
                            <span className="font-bold text-slate-900 text-xl">Password</span>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control m-3">
                            <span className="mb-4 text-slate-950">Have an account ? <Link to="/login" className="font-bold animate-pulse">Log In</Link> here.</span>
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

        </div>
    );
};

export default SignUp;
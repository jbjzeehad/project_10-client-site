import { Link } from "react-router-dom";
import { LuBookPlus } from "react-icons/lu";
import { LuBookUp } from "react-icons/lu";
import { LuBookDown } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { useContext } from "react";
import { Authcontxt } from "../Providers/AuthProviders";


const Navbar = () => {

    const { user, logOutUser } = useContext(Authcontxt);

    const handleLogOut = evnt => {
        evnt.preventDefault();
        logOutUser()
            .then(() => console.log('Logged Out'))
            .catch(error => console.error(error.message))
    }

    const navItems = <>
        {
            user ? <>
                <li className="border-l hover:text-slate-100 text-slate-900 font-bold text-base" ><Link to='/'><LuHome className="text-xl"></LuHome>HOME</Link></li>
                <li className="border-l hover:text-slate-100 text-slate-900 font-bold text-base" ><Link to='/add'><LuBookPlus className="text-xl"></LuBookPlus>ADD</Link></li>
                <li className="border-l hover:text-slate-100 text-slate-900 font-bold text-base" ><Link to='/borrow'><LuBookUp className="text-xl"></LuBookUp>BORROW</Link></li>
                <li className="border-l hover:text-slate-100 text-slate-900 font-bold text-base" ><Link to='/all'><LuBookDown className="text-xl"></LuBookDown> ALL</Link></li>
            </> : <>
                <li className="border-l hover:text-slate-100 text-slate-900 font-bold text-base" ><Link to='/'><LuHome className="text-xl"></LuHome>HOME</Link></li>
            </>
        }
    </>
    return (
        <div>
            <div className="bg-gradient-to-r from-violet-500 to-slate-400 border-b border-violet-500 navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-violet-500 to-slate-400 rounded-box w-52">
                            <input type="checkbox" value="night" className="toggle theme-controller" />
                            {navItems}
                        </ul>
                    </div>
                    <div className="px-2 flex  gap-2 items-center">
                        <img className="w-10" src="https://i.ibb.co/nPPf9RJ/logo-lm.png" />
                        <p className="text-2xl font-bold text-slate-900">City Library</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-3">
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value="night" />

                            {/* sun icon */}
                            <svg className="swap-on text-slate-900 fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-8 h-8 text-violet-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className=" flex items-center  gap-2 px-2 ">
                                <img className="rounded-full w-7 h-7 " src={user.photoURL} />
                                <span className="font-bold text-lg hover:text-violet-900 text-slate-900 py-1">{user.displayName}</span>
                            </div>
                            <button onClick={handleLogOut} ><Link to='/' className="border-l p-2 hover:text-slate-100 text-slate-900 font-bold text-base">SIGN OUT</Link></button>
                        </> : <>
                            <button><Link to='/login' className="border-l p-2 hover:text-slate-100 text-slate-900 font-bold text-base">LOG IN</Link></button>
                            <button><Link to='/signup' className="border-l p-2 hover:text-slate-100 text-slate-900 font-bold text-base">SIGN UP</Link></button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
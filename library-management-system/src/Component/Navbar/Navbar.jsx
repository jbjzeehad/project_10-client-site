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
                            {navItems}
                        </ul>
                    </div>
                    <div className="px-2 flex  gap-2 items-center">
                        <img className="w-10" src="https://i.ibb.co/nPPf9RJ/logo-lm.png" />
                        <p className="text-2xl font-bold text-slate-900">City Library</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
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
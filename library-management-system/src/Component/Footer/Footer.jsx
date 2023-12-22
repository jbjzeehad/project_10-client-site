import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div >
            <div className="text-sm text-slate-50 font-medium grid grid-cols-5 bg-violet-500 px-24 py-8">
                <div>
                    <p>About Us</p>
                    <p>Current Member</p>
                    <p>Annual Programs</p>
                    <p>Research</p>
                </div>
                <div>
                    <p>Library</p>
                    <p>Recreation</p>
                    <p>Admin</p>
                </div>
                <div>
                    <p>Other Staff</p>
                    <p>Book Store</p>
                    <p>MemberShip</p>
                    <p>Careers</p>
                </div>
                <div>
                    <p>Desclaimer</p>
                    <p>Give Now</p>
                    <p>Free Offer</p>
                </div>
                <div className="flex items-center">
                    <p className="flex gap-2 items-center text-lg">Join with us<BsFacebook></BsFacebook><BsTwitterX></BsTwitterX><BsYoutube></BsYoutube><BsLinkedin></BsLinkedin></p>
                </div>
            </div>
            <div className="p-2 font-medium flex justify-center text-sm items-center text-slate-900 bg-gradient-to-r from-violet-300 to-slate-400 gap-2">
                <img className="w-6" src="https://i.ibb.co/nPPf9RJ/logo-lm.png" />
                <p>City Library © Jbj Zeehad.2023</p>
            </div>
        </div >
    );
};

export default Footer;
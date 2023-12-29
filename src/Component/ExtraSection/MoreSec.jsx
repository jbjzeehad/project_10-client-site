import { TiUserAdd } from "react-icons/ti";
import { MdCollectionsBookmark } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";



const MoreSec = () => {

    const handleToast = (event) => {
        event.preventDefault();
        const form = event.target;
        form.reset();
        toast("Subscribed !!");
    }



    return (
        <div className=" bg-gradient-to-r from-violet-500 to-slate-400">
            <div className="grid grid-cols-3 p-5 gap-5">
                <div className="grid bg-gradient-to-r from-violet-300 to-slate-300 text-slate-900 rounded-lg p-5 ">
                    <h4 className="text-5xl font-bold "><TiUserAdd></TiUserAdd></h4>
                    <p className="text-3xl">Total Member : 123</p>
                </div>
                <div className="grid bg-gradient-to-r from-violet-300 to-slate-300 text-slate-900 rounded-lg p-5 ">
                    <h4 className="text-5xl font-bold "><MdCollectionsBookmark></MdCollectionsBookmark></h4>
                    <p className="text-3xl">Books Collection : 291</p>
                </div>
                <div className="grid bg-gradient-to-r from-violet-300 to-slate-300 text-slate-900 rounded-lg p-5 ">
                    <h4 className="text-5xl font-bold "><HiStatusOnline></HiStatusOnline></h4>
                    <p className="text-3xl">Average Visitors : 538</p>
                </div>

            </div>
            <div className="grid grid-cols-2 p-3 items-center">
                <form onSubmit={handleToast} className="form-control text-center gap-3 mx-3">
                    <p className="text-3xl text-slate-900 font-bold p-2">Updated News Here !!</p>
                    <input type="text" placeholder="Name" className="p-3 rounded-lg bg-transparent border text-slate-900 " required />
                    <input type="text" placeholder="Email" className="p-3 rounded-lg bg-transparent border text-slate-900 " required />
                    <button className="border text-slate-900 font-bold rounded-lg p-3 hover:bg-violet-500 hover:text-white">SUBSCRIBE</button>
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

export default MoreSec;
import { FiUser } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { PiBooksDuotone } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { useContext } from "react";
import { Authcontxt } from "../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";

const BookDetails = () => {
    const { user } = useContext(Authcontxt);
    const bookDetails = useLoaderData();
    const { id } = useParams();
    const details = bookDetails.find(book => book._id === id);
    const handleBorrowedBooks = e => {
        e.preventDefault();
        const form = e.target;
        const email = user.email;
        const currentdate = form.currentdate.value;
        const returndate = form.returndate.value;
        const bookId = details._id;
        const borrowed = { email, returndate, currentdate, bookId };
        let amount = parseInt(details.amount);
        if (amount > 0) {
            fetch('https://ph-library-server.vercel.app/borrowedbooks', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(borrowed)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            --amount;
            const image = details.image;
            const bookName = details.bookName;
            const authorName = details.authorName;
            const category = details.category;
            const rating = details.rating;
            const updatedbooks = { image, bookName, authorName, category, rating, amount };
            fetch(`https://ph-library-server.vercel.app/allbooks/${details._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedbooks)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        toast('Done');
                    }
                })
        }
        else {
            toast('Not Enough Book');
        }
    }
    return (
        <div className="bg-gradient-to-r from-violet-500 to-slate-300">
            <div className="grid grid-cols-6  p-3">
                <div className="col-span-1">
                    <img className="rounded-l-lg" src={details.image} />
                </div>
                <div className="col-span-5">
                    <div className="self-end flex col-span-2 items-center justify-between bg-slate-900 bg-opacity-80 py-5 px-5 w-full rounded-r-lg text-slate-300">
                        <div>
                            <p className=' font-semibold text-3xl'>{details.bookName}</p>
                            <StarRatings rating={parseInt(details.rating)} starRatedColor='#8B5CF6' starEmptyColor='white' starDimension='16px'></StarRatings>
                        </div>
                        <div>
                            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="border-violet-500 border-2 rounded-lg m-3 p-3 hover:border-slate-300 text-xl hover:text-violet-500 ">Read Book</button>
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="border-violet-500 border-2 rounded-lg m-3 p-3 hover:border-slate-300 text-xl hover:text-violet-500 ">Borrow Book</button>
                        </div>
                    </div>
                    <div className=" m-3">
                        <p className="flex items-center gap-2 text-xl font-semibold text-slate-900"><FiUser></FiUser> Author : {details.authorName}</p>
                        <p className="flex items-center gap-2 text-xl font-semibold text-slate-900"><PiBooksDuotone></PiBooksDuotone> Category : {details.category}</p>
                        <p className="flex items-center gap-2 text-xl font-semibold text-slate-900"><LiaSwatchbookSolid></LiaSwatchbookSolid> Available Books : 0{details.amount}</p>
                        <p className="flex items-center gap-2 text-xl font-semibold text-slate-900"><IoBookOutline></IoBookOutline> Read some content of the book.</p>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box bg-violet-500">
                                <h3 className="font-bold flex items-center gap-2 m-3 text-2xl text-slate-50"><IoBookOutline></IoBookOutline> {details.bookName}</h3>
                                <p className="py-4 pb-0 m-3 text-slate-950 font-medium text-lg">{details.description}</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="border p-2 text-lg rounded-lg text-slate-50 hover:bg-violet-400 hover:text-slate-900 hover:font-bold">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box bg-violet-500">
                                <h3 className="font-bold flex items-center gap-2 m-3 text-2xl text-slate-50"><IoBookOutline></IoBookOutline> {details.bookName}</h3>
                                <form onSubmit={handleBorrowedBooks} >
                                    <div className="form-control  gap-3 m-3">
                                        <span className="font-bold text-slate-900 text-xl">Name</span>
                                        <input type="text" value={user.displayName} placeholder="email" className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control  gap-3 m-3">
                                        <span className="font-bold text-slate-900 text-xl">Email</span>
                                        <input type="text" name="email" value={user.email} className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control  gap-3 m-3">
                                        <span className="font-bold text-slate-900 text-lg">Current Date</span>
                                        <input type="date" name="currentdate" className="input def input-bordered" required />
                                    </div>
                                    <div className="form-control  gap-3 m-3">
                                        <span className="font-bold text-slate-900 text-lg">Return Date</span>
                                        <input type="date" name="returndate" className="input input-bordered" required />
                                    </div>
                                    <button className="btn m-3 hover:bg-violet-500 hover:text-white ">SUBMIT</button>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="border p-2 text-lg rounded-lg text-slate-50 hover:bg-violet-400 hover:text-slate-900 hover:font-bold">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};
export default BookDetails;
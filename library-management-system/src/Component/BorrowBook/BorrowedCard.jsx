import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import { FiUser } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { PiBooksDuotone } from "react-icons/pi";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { LuBookDown, LuBookUp } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";


const BorrowedCard = ({ borrowcard, handleDeleteBook }) => {

    ////////////////////////////////////////
    const [eventCard, setEventCard] = useState([]);


    ///////////////////////////////

    const { _id, bookId, currentdate, returndate } = borrowcard;

    // fetch(`http://localhost:5000/allbooks/${bookId}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })

    useEffect(() => {
        fetch(`http://localhost:5000/allbooks/${bookId}`)
            .then(res => res.json())
            .then(data => setEventCard(data))

    }, [])


    // const handleDeleteBook = id => {
    //     fetch(`http://localhost:5000/borrowedbooks/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount > 0) {
    //                 alert('deleted');
    //             }
    //         })
    // }





    // const handleupdatedBook = evnt => {
    //     evnt.preventDefault();

    //     let amount = eventCard.amount + 1;
    //     const image = eventCard.image;
    //     const bookName = eventCard.bookName;
    //     const authorName = eventCard.authorName;
    //     const category = eventCard.category;
    //     const rating = eventCard.rating;
    //     const updatednewbooks = { image, bookName, authorName, category, rating, amount };


    //     fetch(`http://localhost:5000/allbooks/${eventCard._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatednewbooks)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 toast('Done');
    //             }
    //         })
    // }







    return (
        <div>
            <h3>borrow :{_id}</h3>
            <h3>card : {eventCard._id}</h3>
            <div className="rounded-lg bg-gradient-to-l from-violet-500 to-slate-400 grid grid-cols-4">
                <div className="col-span-1">
                    <img src={eventCard.image} className="rounded-l-lg" alt="" />
                </div>
                <div className=" col-span-3 m-3 mb-1">
                    <div className="grid">
                        <h3 className=" flex items-center gap-2 text-xl font-bold text-slate-950"><IoBookOutline></IoBookOutline>{eventCard.bookName}</h3>
                        <p className=" flex items-center gap-2 text-lg font-medium text-slate-800"><PiBooksDuotone></PiBooksDuotone>{eventCard.category}</p>
                        <div className="flex gap-3 py-2 text-sm text-slate-900">
                            <p className=" rounded-md flex items-center gap-1"><LuBookUp></LuBookUp>{currentdate}</p>
                            <p className=" rounded-md flex items-center gap-1"><LuBookDown></LuBookDown> {returndate}</p>
                        </div>

                        <div className="mt-1 flex justify-between">
                            {/* ///to={`/bookdetails/${_id}`} */}
                            <button onClick={() => handleDeleteBook(_id, eventCard._id)} className="border text-base  text-slate-100 border-violet-800 hover:bg-violet-800 px-3 py-1 rounded-lg">Return Button</button>

                        </div>
                    </div>

                </div>

            </div>
            {/* <ToastContainer></ToastContainer> */}


        </div>
    );
};

export default BorrowedCard;
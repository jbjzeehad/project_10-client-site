import { useEffect, useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { PiBooksDuotone } from "react-icons/pi";
import { LuBookDown, LuBookUp } from "react-icons/lu";

const BorrowedCard = ({ borrowcard, handleDeleteBook }) => {

    const [eventCard, setEventCard] = useState([]);

    const { _id, bookId, currentdate, returndate } = borrowcard;

    useEffect(() => {
        fetch(`https://ph-library-server.vercel.app/allbooks/${bookId}`)
            .then(res => res.json())
            .then(data => setEventCard(data))

    }, [])

    return (
        <div>
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
                            <button onClick={() => handleDeleteBook(_id, eventCard._id)} className="border text-base  text-slate-100 border-violet-800 hover:bg-violet-800 px-3 py-1 rounded-lg">Return Button</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BorrowedCard;
import StarRatings from "react-star-ratings";
import { PiBooksDuotone } from "react-icons/pi";
import { IoBookOutline, IoSettingsOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";


const BookCard = ({ bookcard }) => {
    const { _id, image, bookName, authorName, category, rating } = bookcard;
    return (
        <div>
            <div className="rounded-lg bg-gradient-to-l from-violet-500 to-slate-400 grid grid-cols-4">
                <div className="col-span-1">
                    <img src={image} className="rounded-l-lg" alt="" />
                </div>
                <div className=" col-span-3 m-3 mb-1">
                    <div className="grid ">
                        <h3 className=" flex items-center gap-2 text-xl font-bold text-slate-950"><IoBookOutline></IoBookOutline>{bookName}</h3>
                        <p className=" flex items-center gap-2 text-lg font-semibold text-slate-900"><FiUser></FiUser>{authorName}</p>
                        <p className=" flex items-center gap-2 text-base font-medium text-slate-800"><PiBooksDuotone></PiBooksDuotone>{category}</p>
                        <p><StarRatings rating={parseInt(rating)} starRatedColor='#8F00FF' starEmptyColor='white' starDimension='12px'></StarRatings></p>
                        <div className="mt-1 flex justify-between">
                            <Link to={`/bookdetails/${_id}`}><button className="border text-base  text-slate-100 border-violet-800 hover:bg-violet-800 px-3 py-1 rounded-lg">More Details</button></Link>
                            <Link to={`/update/${_id}`}> <button className="rounded-full border border-violet-800 p-2 text-slate-50 hover:bg-violet-800"><IoSettingsOutline></IoSettingsOutline></button></Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BookCard;
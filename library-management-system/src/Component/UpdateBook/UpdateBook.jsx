

const UpdateBook = () => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-slate-400">
            <form className=" py-5 px-10 w-full grid grid-cols-2 gap-5">
                <div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Book</span>
                        <input type="text" placeholder="name" className=" text-white input " required />
                    </div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Author</span>

                        <input type="text" placeholder="name" className=" text-white input " required />
                    </div>
                    <div className="form-control  gap-3 m-3">

                        <span className="font-bold text-slate-900 text-xl">Category</span>
                        <div className="join">
                            <select className="w-full select select-bordered join-item">
                                <option disabled selected>Category</option>
                                <option>Horror</option>
                                <option>Comic</option>
                                <option>History</option>
                                <option>Fiction</option>
                                <option>Tech-Sci</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="form-control  gap-3 m-3">

                        <span className="font-bold text-slate-900 text-xl">Rating</span>
                        <input type="text" placeholder="Out of 5.0" className="input input-bordered" required />

                    </div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Image</span>
                        <input type="text" placeholder="img url" className="input input-bordered" required />
                    </div>

                    <div className="form-control m-3">
                        <span className="mb-4 text-violet-600">Check again.</span>
                        <button className="btn hover:bg-violet-500 hover:text-white ">UPDATE BOOK</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default UpdateBook;
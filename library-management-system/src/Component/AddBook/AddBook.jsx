
import { ToastContainer, toast } from "react-toastify";

const AddBook = () => {
    const handleAddBook = (evnt) => {
        evnt.preventDefault();
        const form = evnt.target;
        const bookName = form.bookName.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const amount = form.amount.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;
        const bookDetails = { bookName, authorName, category, amount, rating, image, description };
        console.log(bookDetails);
        fetch('https://ph-library-server.vercel.app/allbooks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookDetails)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    toast('Book Added');
                }
                form.reset();
            })
    }
    return (
        <div className="bg-gradient-to-r from-violet-500 to-slate-400">
            <form onSubmit={handleAddBook} className=" py-5 px-10 w-full grid grid-cols-2 gap-5">
                <div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Book</span>
                        <input type="text" name="bookName" placeholder="name" className=" text-white input " required />
                    </div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Author</span>

                        <input type="text" placeholder="name" name="authorName" className=" text-white input " required />
                    </div>
                    <div className="form-control  gap-3 m-3">

                        <span className="font-bold text-slate-900 text-xl">Category</span>
                        <div className="join">
                            <select name="category" required className="w-full select select-bordered join-item">
                                <option disabled>Category</option>
                                <option value="Horror">Horror</option>
                                <option value="Comic" >Comic</option>
                                <option value="History" >History</option>
                                <option value="Fiction" >Fiction</option>
                                <option value="SciTec" >Sci-Tec</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control  gap-3 m-3">

                        <span className="font-bold text-slate-900 text-xl">Quantity</span>

                        <input type="text" placeholder="amount" name="amount" className="input input-bordered" required />
                    </div>
                </div>
                <div>
                    <div className="form-control  gap-3 m-3">

                        <span className="font-bold text-slate-900 text-xl">Rating</span>

                        <div className="join">
                            <select name="rating" required className="w-full select select-bordered join-item">
                                <option disabled>Rating</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Image</span>
                        <input type="text" name="image" placeholder="img url" className="input input-bordered" required />
                    </div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Description</span>
                        <input type="text" name="description" placeholder="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control m-3">
                        <span className="mb-4 text-violet-600">All information should be valid.</span>
                        <button className="btn hover:bg-violet-500 hover:text-white ">ADD BOOK</button>
                    </div>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddBook;
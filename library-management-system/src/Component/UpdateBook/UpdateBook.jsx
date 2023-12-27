import { ToastContainer, toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {

    const loadedAllBooks = useLoaderData([]);

    const handleUpdatedBooks = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const bookName = form.bookName.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const bookDetails = { image, bookName, authorName, category, rating };
        console.log(bookDetails);
        fetch(`http://localhost:5000/allbooks/${loadedAllBooks._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast("Updated Succes !!");
                }
            })
    }

    return (
        <div className="bg-gradient-to-r from-violet-500 to-slate-400">
            <form onSubmit={handleUpdatedBooks} className=" py-5 px-10 w-full grid grid-cols-2 gap-5">
                <div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Book</span>
                        <input type="text" name='bookName' defaultValue={loadedAllBooks.bookName} placeholder="name" className=" text-white input " required />
                    </div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Author</span>
                        <input type="text" name='authorName' defaultValue={loadedAllBooks.authorName} placeholder="name" className=" text-white input " required />
                    </div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Category</span>
                        <div className="join">
                            <select name="category" defaultValue={loadedAllBooks.category} className="w-full select select-bordered join-item">
                                <option value='Horror'>Horror</option>
                                <option value='Comic'>Comic</option>
                                <option value="History">History</option>
                                <option value="Fiction">Fiction</option>
                                <option value="SciTec" >Sci-Tec</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="form-control  gap-3 m-3">
                        <span className="font-bold text-slate-900 text-xl">Rating</span>
                        <div className="join">
                            <select name="rating" defaultValue={loadedAllBooks.rating} required className="w-full select select-bordered join-item">
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
                        <input type="text" name='image' defaultValue={loadedAllBooks.image} placeholder="img url" className="input input-bordered" required />
                    </div>
                    <div className="form-control m-3">
                        <span className="mb-4 text-violet-600">Check again.</span>
                        <button className="btn hover:bg-violet-500 hover:text-white ">UPDATE BOOK</button>
                    </div>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};
export default UpdateBook;
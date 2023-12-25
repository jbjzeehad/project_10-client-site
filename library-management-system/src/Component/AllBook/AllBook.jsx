import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";


const AllBook = () => {
    const loadedAllBooks = useLoaderData([]);
    const [seeAllBooks, setAllBooks] = useState(loadedAllBooks);
    return (
        <div>
            <div className="bg-gradient-to-r from-violet-300 to-slate-300 p-3 grid grid-cols-3 gap-3">
                {
                    seeAllBooks.map(bookList => <BookCard key={bookList._id} bookcard={bookList}></BookCard>)

                }
            </div>
        </div>
    );
};

export default AllBook;
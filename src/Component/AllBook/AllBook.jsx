import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";


const AllBook = () => {
    const loadedAllBooks = useLoaderData([]);
    console.log(loadedAllBooks.length);
    const [seeAllBooks, setAllBooks] = useState(loadedAllBooks);
    return (
        <div>
            <div className=" p-3 grid grid-cols-3 gap-3">
                {
                    seeAllBooks.map(bookList => <BookCard key={bookList._id} bookcard={bookList}></BookCard>)

                }
            </div>
        </div>
    );
};

export default AllBook;
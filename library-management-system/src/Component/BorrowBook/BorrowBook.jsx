import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontxt } from "../Providers/AuthProviders";
import BorrowedCard from "./BorrowedCard";


const BorrowBook = () => {

    const { user } = useContext(Authcontxt);
    const loadedBorrowedBooks = useLoaderData([]);


    const handleDeleteBook = id => {
        fetch(`http://localhost:5000/borrowedbooks/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted');
                }
            })
    }




    return (
        <div className="bg-gradient-to-r from-violet-300 to-slate-300 ">
            {/* <h3>BORROW BOOK: {loadedBorrowedBooks.length} </h3> */}
            <div className="grid grid-cols-3 gap-3 p-5">
                {
                    loadedBorrowedBooks.filter(emailId => emailId.email === user.email).map(borrowedcard => <BorrowedCard key={borrowedcard._id} borrowcard={borrowedcard} handleDeleteBook={handleDeleteBook} ></BorrowedCard>)
                }

            </div>
        </div>
    );
};

export default BorrowBook;
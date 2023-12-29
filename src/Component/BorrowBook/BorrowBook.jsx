import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontxt } from "../Providers/AuthProviders";
import BorrowedCard from "./BorrowedCard";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2'


const BorrowBook = () => {
    // const [bookUp, setbookUp] = useState([]);


    const { user } = useContext(Authcontxt);
    const loadedBorrowedBooks = useLoaderData([]);
    ////////////////////////////////////////////////////
    const [loaded, setbookUp] = useState(loadedBorrowedBooks);


    const handleDeleteBook = (id, bid) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Return the Book!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ph-library-server.vercel.app/borrowedbooks/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Returned!",
                                text: "Your Book has been returned.",
                                icon: "success"
                            });

                            const remaining = loaded.filter(booking => booking._id !== id);
                            setbookUp(remaining);
                        }
                    })
            }
        });
        // console.log(bid);

    }
    return (
        <div className=" ">
            {/* <h3>BORROW BOOK: {loadedBorrowedBooks.length} </h3> */}
            <div className="grid grid-cols-3 gap-3 p-5">
                {
                    loaded.filter(emailId => emailId.email === user.email).map(borrowedcard => <BorrowedCard key={borrowedcard._id} borrowcard={borrowedcard} handleDeleteBook={handleDeleteBook}></BorrowedCard>)
                }

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BorrowBook;
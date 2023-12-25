import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const History = () => {
    const loadHorrorBook = useLoaderData([]);
    return (
        <div className="bg-gradient-to-r from-violet-300 to-slate-300 p-3 grid grid-cols-3 gap-3">
            {
                loadHorrorBook.filter(horrorbook => horrorbook.category === "History").map(books => <BookCard key={books._id} bookcard={books}></BookCard>)
            }
        </div>
    );
};

export default History;
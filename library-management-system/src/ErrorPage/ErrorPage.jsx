import { LuBookX } from "react-icons/lu";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="p-10 lg:text-5xl md:text-3xl text-xl font-bold text-red-900 flex justify-center items-center">4<LuBookX></LuBookX>4 NOT FOUND</h3>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;
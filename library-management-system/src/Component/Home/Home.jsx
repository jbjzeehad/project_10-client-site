import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import MoreSec from "../ExtraSection/MoreSec";
import WebsiteDetails from "../ExtraSection/WebsiteDetails";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <WebsiteDetails></WebsiteDetails>
            <Category></Category>
            <MoreSec></MoreSec>
        </div>
    );
};

export default Home;
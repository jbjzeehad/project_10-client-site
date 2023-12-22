
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {

    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co/PTDD9JZ/toyotacamry.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/PTDD9JZ/toyotacamry.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/PTDD9JZ/toyotacamry.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/PTDD9JZ/toyotacamry.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/PTDD9JZ/toyotacamry.png" alt="" /></SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Banner;
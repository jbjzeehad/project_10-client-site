import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';

const Banner = () => {

    const buttons = <>
        <button className="border-violet-500 border-2 rounded-lg m-3 p-3 hover:border-slate-300 text-xl hover:text-violet-500 ">Read More</button>
    </>

    return (
        <div className='relative h-full p-2'>
            <Swiper
                slidesPerView={3}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper rounded-lg"
            >

                <SwiperSlide>

                    <img className="relative rounded-lg" src="https://i.ibb.co/XScvv3S/horror1.png" />
                    <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-70 py-5 px-5 w-full rounded-b-lg text-slate-300">
                        <p className=' font-semibold text-3xl' >Ethel Cain</p>
                        {buttons}
                    </div>


                </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/VND3wv6/comic1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/NKy6r9Y/history1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/QDBKQsy/fiction1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/XScvv3S/horror1.png" alt="" /></SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Banner;
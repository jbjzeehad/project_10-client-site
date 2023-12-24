import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import StarRatings from 'react-star-ratings';


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
                    <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full rounded-bl-lg text-slate-300">
                        <div>
                            <p className=' font-semibold text-3xl'>Ethel Cain</p>
                            <StarRatings rating={3} starRatedColor='#8B5CF6' starEmptyColor='white' starDimension='16px'></StarRatings>
                        </div>
                        {buttons}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/F0L0Yzs/horor2.png" alt="" />
                    <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full text-slate-300">
                        <div>
                            <p className=' font-semibold text-3xl'>The Chalkman</p>
                            <StarRatings rating={4} starRatedColor='#8B5CF6' starEmptyColor='white' starDimension='16px'></StarRatings>
                        </div>
                        {buttons}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/VND3wv6/comic1.png" alt="" />
                    <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full text-slate-300">
                        <div>
                            <p className=' font-semibold text-3xl'>The Batman</p>
                            <StarRatings rating={3.5} starRatedColor='#8B5CF6' starEmptyColor='white' starDimension='16px'></StarRatings>
                        </div>
                        {buttons}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/NKy6r9Y/history1.png" alt="" />
                    <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full text-slate-300">
                        <div>
                            <p className=' font-semibold text-3xl'>Murakami</p>
                            <StarRatings rating={2.5} starRatedColor='#8B5CF6' starEmptyColor='white' starDimension='16px'></StarRatings>
                        </div>
                        {buttons}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/BKg6xfY/history2.png" alt="" />
                    <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full text-slate-300">
                        <div>
                            <p className=' font-semibold text-3xl'>Cannibalism</p>
                            <StarRatings rating={3} starRatedColor='#8B5CF6' starEmptyColor='white' starDimension='16px'></StarRatings>
                        </div>
                        {buttons}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/QDBKQsy/fiction1.png" alt="" />
                    <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full  text-slate-300">
                        <div>
                            <p className=' font-semibold text-3xl'>Song of Achilles</p>
                            <StarRatings rating={2} starRatedColor='#8B5CF6' starEmptyColor='white' starDimension='16px'></StarRatings>
                        </div>
                        {buttons}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/3Y1ntxZ/tech1.png" alt="" />
                    <div className="flex items-center justify-between absolute bottom-0 left-0 bg-slate-900 bg-opacity-80 py-5 px-5 w-full rounded-br-lg text-slate-300">
                        <div>
                            <p className=' font-semibold text-3xl'>Photonics</p>
                            <StarRatings rating={4} starRatedColor='#8B5CF6' starEmptyColor='white' starDimension='16px'></StarRatings>
                        </div>
                        {buttons}
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default Banner;
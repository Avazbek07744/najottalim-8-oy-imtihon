import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css';
import { Autoplay } from 'swiper/modules';

export default function Main() {
    const [coin, setCoin] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=8&page=1&sparkline=false&price_change_percentage=24h')
            .then((res) => res.json())
            .then((data) => {
                setCoin(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className='main__component'>
                <div className='mb-[18px]'>
                    <h1 className='pt-[34px] text-[60px] text-center font-bold text-[#87CEEB] mb-4'>CRYPTOFOLIO WATCH LIST</h1>
                    <p className='text-center text-[#A9A9A9] pb-[23px]'>
                        Get all the Info regarding your favorite Crypto Currency
                    </p>
                </div>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={false}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper mb-[27px]"
                >
                    {
                        coin.length > 0 && coin?.map((v, i) => {
                            return (
                                <SwiperSlide key={i} className='flex flex-col h-[200px] bg-transparent text-white'>
                                    <img src={v.image}
                                        width={80}
                                        height={80}
                                        className='object-cover mb-2.5'
                                        alt="" />
                                    <span className='flex gap-2 uppercase'>
                                        <p>{v.symbol}</p>
                                        {
                                            v.ath_change_percentage > 0 ?
                                                <p className='text-green-600' >{v.ath_change_percentage}</p> :
                                                <p className='text-red-600' >{v.ath_change_percentage}</p>
                                        }
                                    </span>
                                    <p className='text-[22px]'>₹  {v.current_price}</p>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    );
}

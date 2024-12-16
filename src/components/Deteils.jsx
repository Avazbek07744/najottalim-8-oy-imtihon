import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
// import ChartJSx from './ChartJSx';

const Deteils = () => {
    const param = useParams();
    const [date, setDate] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${param.id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Maʼlumotlarni olishda xatolik yuz berdi.');
                }
                return res.json();
            })
            .then((data) => {
                setDate(data);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            });
    }, [param.id]);

    console.log(date);
    

    if (error) return <div className="text-red-500 font-bold">{error}</div>;

    if (!date.id) return <div className="text-white text-center mt-10">Yuklanmoqda...</div>;

    return (
        <div className="bg-gray-900 min-h-[778px] text-white">
            <Header />
            <div className="flex gap-10 min-h-[778px] mt-6">
                <div className="max-w-[547px] h-[678px] px-6 border-r border-[#808080] pt-[25px]">
                    {date.image?.thumb && (
                        <img
                            src={date.image.large}
                            alt={`${date.name} Logo`}
                            width={200}
                            className="mx-auto mb-4 object-cover"
                        />
                    )}
                    <h1 className="text-5xl font-bold mb-6 text-center">{date.name}</h1>
                    <p className="text-[16px] text-[#FFFFFF] mb-4 w-[495px]">
                        {date.description?.en?.split('.')[0]}.
                    </p>
                    <p className="my-2/5 text-2xl">
                        <span className="font-bold">Rank:</span>{' '}
                        <span className="text-yellow-400">{date.market_cap_rank}</span>
                    </p>
                    <p className="text-2xl my-4">
                        <span className="font-bold">Current Price:</span>{' '}
                        <span className="text-green-400">
                            $ {date.market_data?.current_price?.usd?.toLocaleString()}
                        </span>
                    </p>
                    <p className="text-2xl mb-2">
                        <span className="font-bold">Market Cap:</span>{' '}
                        <span className="text-blue-400">
                            $ {date.market_data?.market_cap?.usd?.toLocaleString()}
                        </span>
                    </p>
                </div>
                <div>
                    {/* <ChartJSx/> */}
                    <div className='flex gap-9 ml-5'>
                        <Link className='w-[230px] py-3 ps-4 capitalize hover:bg-[#87CEEB] hover:text-black rounded'>24 hours</Link>
                        <Link className='w-[230px] py-3 ps-4 capitalize hover:bg-[#87CEEB] hover:text-black rounded'>30 days</Link>
                        <Link className='w-[230px] py-3 ps-4 capitalize hover:bg-[#87CEEB] hover:text-black rounded'>3 months</Link>
                        <Link className='w-[230px] py-3 ps-4 capitalize hover:bg-[#87CEEB] hover:text-black rounded'>1 years</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deteils;

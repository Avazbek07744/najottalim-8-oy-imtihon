import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';

const Sidebar = () => {
    const { bar, setBar } = useContext(ThemeContext);
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        if (bar.length > 0) {
            const promises = bar.map((coin) =>
                fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
                    .then((response) => response.json())
                    .catch((error) => {
                        console.error(`Error fetching data for ${coin}:`, error);
                        return null;
                    })
            );

            Promise.all(promises)
                .then((results) => {
                    const validData = results.filter((data) => data !== null);
                    setCryptoData(validData);
                })
                .catch((error) => console.error('Error with promises:', error));
        }
    }, [bar]);

    function handleClick(id) {
        const updatedData = cryptoData.filter((coin) => coin.id !== id);
        setCryptoData(updatedData);

        const updatedBar = bar.filter((coin) => coin !== id);
        setBar(updatedBar);
        localStorage.setItem('bar', JSON.stringify(updatedBar));
    }

    return (
        <div className="bg-[#515151] w-[481px] h-[1677px]">
            <button className='text-white border px-2 text-2xl'>x</button>
            <h2 className="text-[30px] text-white text-center pt-8">WATCHLIST</h2>

            <div className="text-white p-4 flex gap-[41px] flex-wrap">
                {cryptoData.map((data) => (
                    <div key={data.id} className="mb-4 w-[198px] h-[248px] bg-[#14161A] rounded-xl text-center">
                        <img 
                            src={data.image?.large} 
                            width={118} 
                            height={118} 
                            className='mb-2 pt-[25px] mx-auto'
                            alt="crypto coin" 
                        />
                        <p className='mb-4'>₹ {data.market_data?.current_price?.inr}</p>
                        <button 
                            onClick={() => handleClick(data.id)} 
                            className='w-[106px] bg-[#FF0000] text-white'>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;

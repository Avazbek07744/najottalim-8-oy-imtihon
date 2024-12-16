import React, { useContext, useEffect, useState } from 'react';
import img1 from '../assets/Eye-green.svg';
import img2 from '../assets/Eye-wight.svg';
import ReactPaginate from 'react-paginate';
import { ThemeContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Cripto = () => {
    const { theme, setDetal } = useContext(ThemeContext)
    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${theme}&order=gecko_desc&per=false&price_change_percentage=24h`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [theme]);

    const toggleLoad = (id) => {
        setLoad((prevLoad) => ({
            ...prevLoad,
            [id]: !prevLoad[id],
        }));
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    const hendelDiv = (id) => {
        navigate(`/deteils/${id}`)
    }

    const pageCount = Math.ceil(product.length / itemsPerPage);

    const currentItems = product.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div className='bg-[#14161A]'>
            <h1 className='text-4xl text-white text-center py-[18px]'>Cryptocurrency Prices by Market Cap</h1>
            <div className='bace-container'>
                <input
                    type="text"
                    placeholder="Search For a Crypto Currency..."
                    className="input bordere border-[#FFFFFF3B] w-full"
                />
                <div>
                    <div className='h-14 bg-[#87CEEB] text-[#000000] py-[19px] px-4 flex justify-between mt-5 rounded-md font-semibold'>
                        <h3 className='w-[445px] text-sm'>Coin</h3>
                        <h3 className='w-[263px] text-right'>Price</h3>
                        <h3 className='w-[259px] text-right'>24h Change</h3>
                        <h3 className='w-[263px] text-right'>Market Cap</h3>
                    </div>
                    {
                        currentItems.length > 0 && currentItems.map((v) => (
                            <div key={v.id} className='h-[93px] border-b border-[#515151] text-white py-[19px] px-4 flex items-center justify-between mt-5 rounded-md font-semibold'>
                                <button key={v.id} onClick={(e) => { hendelDiv(v.id) }}>
                                    <span className='flex gap-4 w-[445px]'>
                                        <img src={v.image} width={50} className='object-cover' alt="" />
                                        <span>
                                            <p className='text-[22px] uppercase text-white'>{v.symbol}</p>
                                            <p className='text-sm text-[#A9A9A9]'>{v.name}</p>
                                        </span>
                                    </span>
                                </button>
                                <h3 className='w-[263px] text-right'>₹{v.current_price}</h3>
                                <div className='w-[259px] flex items-center justify-end gap-[18px]'>
                                    <button onClick={() => toggleLoad(v.id)}>
                                        <img src={load[v.id] ? img1 : img2} alt="" />
                                    </button>
                                    {
                                        v.price_change_percentage_24h>0?
                                        <h3 className='text-right w-3 mr-14 text-[#0ECB81]'>+{v.price_change_percentage_24h}%</h3>:
                                        <h3 className='text-right w-3 mr-14 text-[#FF0000]'>{v.price_change_percentage_24h}%</h3>
                                    }
                                </div>
                                <h3 className='w-[263px] text-right'>{v.market_cap}</h3>
                            </div>
                        ))
                    }
                </div>

                <div className="flex justify-center mt-4">
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={4}
                        onPageChange={handlePageChange}
                        containerClassName={'flex gap-2'}
                        pageClassName={'cursor-pointer'}
                        pageLinkClassName={'block px-3 py-2 rounded-full text-[#87CEEB] hover:bg-gray-700'}
                        previousClassName={'cursor-pointer px-3 py-2 rounded-full text-[#87CEEB] hover:bg-gray-700'}
                        nextClassName={'cursor-pointer px-3 py-2 rounded-full text-[#87CEEB] hover:bg-gray-700'}
                        breakClassName={'px-3 py-2 text-gray-400'}
                        activeClassName={'bg-gray-700 text-white rounded-full'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Cripto;

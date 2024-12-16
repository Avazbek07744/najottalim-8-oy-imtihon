import React from 'react';

const Bar = ({ image, name, price, onRemove }) => {
    return (
        <div className="flex flex-col items-center justify-center w-[120px] h-[160px] bg-[#333333] rounded-lg shadow-md m-2">
            <img src={image} alt={name} className="w-10 h-10 object-cover" />
            <p className="text-white text-sm font-semibold mt-2">{name}</p>
            <p className="text-[#00FF00] text-sm font-bold mt-1">₹ {price.toLocaleString()}</p>
            <button
                className="bg-red-600 text-white text-xs font-bold px-3 py-1 mt-2 rounded"
                onClick={onRemove}
            >
                Remove
            </button>
        </div>
    );
};

export default Bar;

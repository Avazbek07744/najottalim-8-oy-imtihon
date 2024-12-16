import React from 'react';

export default function Sidebar({ watchlist, removeFromWatchlist }) {
    return (
        <div className="w-64 bg-gray-800 text-white fixed right-0 top-0 h-full p-4">
            <h2 className="text-2xl mb-4 font-bold">WATCHLIST</h2>
            {watchlist.length > 0 ? (
                watchlist.map((item, index) => (
                    <div key={index} className="mb-4 p-3 bg-gray-700 rounded">
                        <div className="flex items-center justify-between mb-2">
                            <img src={item.image} alt={item.name} className="w-8 h-8" />
                            <p>₹ {item.current_price}</p>
                        </div>
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded"
                            onClick={() => removeFromWatchlist(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            ) : (
                <p>No items in your watchlist</p>
            )}
        </div>
    );
}

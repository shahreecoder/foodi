
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

function CatCard({ item }) {
    const [isHeartFillted, setIsHeartFillted] = useState(false);

    const handelHeartClick = () => {
        setIsHeartFillted(!isHeartFillted);
    }
    return (
        <div className="card w-80 bg-base-100 shadow-xl relative mb-6">
            <div className={`rating gap-1 absolute right-2 top-2 p-4 heartstar bg-green ${isHeartFillted ? "text-rose-500" : "text-white"}`} onClick={handelHeartClick}>
                <FaHeart className='h-4 w-4 cursor-pointer' />
            </div>
            <Link to={`/menu/${item._id}`}>
                <figure>
                    <img src={item.image} alt={item.name} className='hover:scale-105 transition-all duration-300 md:h-40' />
                </figure>
            </Link>
            <div className="card-body p-4">
                <h2 className="card-title text-lg">{item.name}</h2>
                <p className="text-sm">Item Description Goes here</p>
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className='font-semibold'><span className='text-xs text-red'>$</span>{item.price}</h5>
                    <button className="btn bg-green text-white text-sm">Buy Now</button>
                </div>
            </div>
        </div>

    )
}

export default CatCard
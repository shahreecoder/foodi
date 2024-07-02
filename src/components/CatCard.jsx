
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { notify } from './Toast';
import { AuthContext } from '../contexts/AuthProvider';
import Swal from 'sweetalert2'
function CatCard({ item }) {
    const { user } = useContext(AuthContext)
    const [isHeartFillted, setIsHeartFillted] = useState(false);
    const navigator = useNavigate();
    const location = useLocation();

    const handelHeartClick = () => {
        setIsHeartFillted(!isHeartFillted);
    }

    const handelBuyNow = (item) => {


        if (user && user?.email) {
            console.log(item);
            notify('success', 'Item has been added to the Cart!');
        } else {
            Swal.fire({
                title: "Please Login",
                text: "You won't be able to add this into cart without login",
                icon: "error",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Signup"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigator('/signup', {state : {from:location}})
                }
            });
        }

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
                    <button className="btn bg-green text-white text-sm" onClick={() => { handelBuyNow(item) }}>Buy Now</button>
                </div>
            </div>

        </div>

    )
}

export default CatCard
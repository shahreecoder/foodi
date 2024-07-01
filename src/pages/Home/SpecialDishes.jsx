import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CatCard from '../../components/CatCard';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const SimpleNextArrow = (props)=>{
    const {className, style, onclick} = props;
    return (
        <div className={className} style={{...style, display:"block", background:"red"}} onClick={onclick} >
            NEXT
        </div>
    );
}

const SimpleBackArrow = (props)=>{
    const {className, style, onclick} = props;
    return (
        <div className={className} style={{...style, display:"block", background:"green"}} onClick={onclick} >
            BACK
        </div>
    );
}

function SpecialDishes() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow:<SimpleNextArrow/>,
        prevArrow:<SimpleBackArrow/>
    };
    const [recipes, setRecipes] = useState([]);
    const slider = React.useRef(null);
    useEffect(() => {
        fetch("/menu.json")
            .then((res) => res.json())
            .then((data) => {
                const special = data.filter((item) => item.category === "popular");
                setRecipes(special);

            })
    }, [])

    return (
        <div className='section-container bggradient py-24 relative'>
            <div className='text-left'>
                <p className='subtitle'>Special Dishes</p>
                <h2 className='title md:w-[520px]'>Standout Dishes From Our Menu</h2>
            </div>
            <div className='md:absolute right-3 top-28 mb-5 md:mr-24'>
                <button onClick={()=>{slider?.current?.slickPrev()}} className='btn p-2 rounded-full ml-5'>
                    <FaAngleLeft className='w-8 h-8 p-1'/>
                </button>
                <button onClick={()=>{slider?.current?.slickNext()}} className='btn p-2 rounded-full ml-5 bg-green text-white'>
                <FaAngleRight className='w-8 h-8 p-1'/>
                </button>
            </div>
            <Slider ref={slider} {...settings} className='overflow-hidden mt-10 space-x-5'>
                {recipes.map((item, i) => (
                    
                    <CatCard key={i} item={item} />
                ))}
            </Slider>
        </div>
    )
}

export default SpecialDishes
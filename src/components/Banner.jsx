import React from 'react'

function Banner() {
    return (
        <div className='section-container bggradient'>
            <div className='py-20 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                {/* {Here Image} */}
                <div className="md:w-1/2">
                    <img src="/images/home/banner.png" alt="Hero Image" />
                    <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                        <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                            <img src="/images/home/b-food1.png" alt="" className='rounded-2xl' />
                            <div className='space-y-1'>
                                <h5 className='font-medium mb-1'>Spicy noodles</h5>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly={true}/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly={true}/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" checked readOnly={true} />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly={true}/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly={true}/>
                                </div>
                                <p><span className='text-red'>$</span>18.00</p>
                            </div>
                        </div>
                        <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                            <img src="/images/home/b-food1.png" alt="" className='rounded-2xl' />
                            <div className='space-y-1'>
                                <h5 className='font-medium mb-1'>Spicy noodles</h5>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly={true}/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly={true}/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" checked readOnly={true}/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly={true}/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" readOnly={true}/>
                                </div>
                                <p><span className='text-red'>$</span>18.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {Text} */}
                <div className="md:w-1/2 space-y-7 px-4">
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights Of Delectable <span className='text-green'>Food</span></h2>
                    <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                    <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                </div>


            </div>
        </div>
    )
}

export default Banner
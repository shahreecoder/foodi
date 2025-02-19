import React from 'react'

function Category() {
    const categoryItems = [
        { id: 1, title: "Main Dist", desp: "(86 dishes)", image: "/images/home/category/img1.png" },
        { id: 2, title: "Break Fast", desp: "(12 break fast)", image: "/images/home/category/img2.png" },
        { id: 3, title: "Dessert", desp: "(48 dessert)", image: "/images/home/category/img3.png" },
        { id: 4, title: "Browse All", desp: "(255 Items)", image: "/images/home/category/img4.png" }
    ]
    return (
        <div className='section-container  bggradient'>
            <div className='text-center'>
                <p className='subtitle'>Customer Favorites</p>
                <h2 className='title'>Popular Catagories</h2>
            </div>
            {/* Category Cards */}
            <div>

                <div className='flex flex-col sm:flex-row flex-wrap gap-2 justify-around items-center mt-12'>
                    {categoryItems.map((item, i) => (
                        <div key={i} className='shadow-lg rounded-3xl bg-white py-6 px-5 w-60 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                            <div className='flex w-full mx-auto items-center justify-center'>
                                <img src={item.image} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' />
                            </div>
                            <div className='mt-5 space-y-1'>
                                <h5 className='font-bold'>{item.title}</h5>
                                <p>{item.desp}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Category
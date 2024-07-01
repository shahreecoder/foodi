import React from 'react'

function Service() {
    const serviceListItem = [
        { id: 1, title: "Catering", desp: "Delight your guests with our flavors and  presentation", image: "/images/home/services/icon1.png" },
        { id: 2, title: "Fast delivery", desp: "We deliver your order promptly to your door", image: "/images/home/services/icon2.png" },
        { id: 3, title: "Online Ordering", desp: "Explore menu & order with ease using our Online Ordering", image: "/images/home/services/icon3.png" },
        { id: 4, title: "Gift Cards", desp: "Give the gift of exceptional dining with Foodi Gift Cards", image: "/images/home/services/icon4.png" }
    ]
    return (

        <div className='section-container bggradient py-16'>
            <div className='py-10 flex flex-col md:flex-row justify-between items-center gap-8'>

                {/* {Text} */}
                <div className="md:w-1/2 space-y-7 px-4">
                    <div className='text-left md:w-4/5'>
                        <p className='subtitle'>Our Story & Services</p>
                        <h2 className='title md:w-[520px]'>Our Culinary Journey And Services</h2>
                        <blockquote className='my-5 leading-[30px] text-secondary'>
                            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                        </blockquote>
                        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Explore</button>
                    </div>
                </div>
                {/* {Here Image} */}
                <div className="md:w-1/2">
                    <div className='grid sm:grid-cols-2 grid-col-1 items-center gap-8 '>
                        {
                            serviceListItem.map ((service) =>(
                                <div key={service.id} className='shadow-md rounded-lg py-5 px-4 text-center space-y-4 text-green cursor-pointer hover:border-indigo-400 transition-all duration-300 hover:border bg-white'>
                                    <img src={service.image} alt="" className='mx-auto'/>
                                    <h5 className='pt-3 font-semibold'>{service.title}</h5>
                                    <p className='text-[#90BD95]'>{service.desp}</p> 
                                </div>
                            ))
                        }
                    </div>
                   
                </div>


            </div>
        </div>
    )
}

export default Service
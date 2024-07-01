import React from 'react'
import { FaStar } from 'react-icons/fa'
function Testimonials() {
    return (
        <div className='section-container bggradient'>
            <div className='py-10 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                {/* {Text} */}
                <div className="md:w-1/2 space-y-7 px-4">
                    <div className='text-left md:w-4/5'>
                        <p className='subtitle'>Testimonials</p>
                        <h2 className='title md:w-[520px]'>What Our Customers Say About Us</h2>
                        <blockquote className='my-5 leading-[30px] text-secondary'>
                            I had the pleasure of dining at Foodi last night, and Im still raving about the experience! The attention to detail in presentation and service was impeccable
                        </blockquote>

                        <div className='flex items-center flex-wrap gap-3'>

                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/home/testimonials/testimonial1.png" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/home/testimonials/testimonial2.png" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="/images/home/testimonials/testimonial3.png" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>

                            </div>

                            <div className='' >
                                <h5 className='text-lg font-semibold'>Customer Feedback</h5>
                                <div className='flex items-center gap-2'>
                                    <FaStar className='text-yellow-400' />
                                    <span className='font-medium'>4.9</span><span className='text-[#807E7E]'>(18.6K Reviews)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* {Here Image} */}
                <div className="md:w-1/2">
                    <img src="/images/home/testimonials/testimonials.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Testimonials
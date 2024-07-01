import React from 'react'
import Banner from '../../components/Banner'
import Category from './Category'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonials'
import Service from './Service'

function Home() {
  return (
    <div>
      <Banner/>
      <Category/>
      <SpecialDishes/>
      <Testimonials/>
      <Service/>
    </div>
  )
}

export default Home
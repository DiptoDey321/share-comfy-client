import React from 'react'
import AdvertiseItems from '../Components/Home/AdvertiseItems'
import Categories from '../Components/Home/Categories'
import Heropart from '../Components/Home/Heropart'
import Testimonial from '../Components/Home/Testimonial'
import WhyUs from '../Components/Home/WhyUs'

function Home() {
  return (
    <div>
        <Heropart></Heropart> 
        <div className="mx-[15%]">
          < hr />
        </div>
        <AdvertiseItems></AdvertiseItems>
        <div className="mx-[15%]">
          < hr />
        </div>
        <Categories></Categories>
        <div className="mx-[15%]">
          < hr />
        </div>
        <Testimonial></Testimonial>
        <WhyUs></WhyUs>
    </div>
  )
}

export default Home
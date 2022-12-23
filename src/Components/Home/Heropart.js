import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

function Heropart() {

    const heroItems = [
        {
            "_id" : "121334",
            "title" : "Trending Collection",
            "miniTitle" : "Get the most trending used furniture in affortable price",
            "Description" : "The Biggest online market place for buying & selling old furniture at low price from our trusted seller. Buy and get your things in a reasonable price",
            "img" : "https://i.ibb.co/VVBfgfB/farhad-fallahzad-Vt-QMBG-Ljc0-unsplash-removebg-preview-removebg-preview.png"
        },
        {
            "_id" : "dwe23",
            "title" : "Work station Collection",
            "miniTitle" : "Customized your Work station room now by doing best deal",
            "Description" : "The Biggest online market place for buying & selling old furniture at low price from our trusted seller. Customize your work-station in low price with high resource",
            "img" : "https://i.ibb.co/d5FHYp7/aditya-wardhana-oo-Z3a5k7-GFQ-unsplash-removebg-preview.png"
        },
        {
            "_id" : "dwe1223",
            "title" : "Room Collection",
            "miniTitle" : "Customized your bed room at in your choice. Do the best Deal",
            "Description" : "The Biggest online market place for buying & selling old furniture at low price from our trusted seller and Save upto 50% in every deal",
            "img" : "https://i.ibb.co/NnSG48N/kara-eads-buhmhprfo3g-unsplash-removebg-preview.png"
        },
    ]
  return (
    <div className='mx-[10%]'>
        <Swiper className="mySwiper" >
        {
            heroItems.map(item =>
                <SwiperSlide key={item._id}>
                    <div className="w-full h-[600px] flex flex-col sm:flex-row items-center justify-center mt-3 sm:mt-0 gap-3">
                        <div className="w-full sm:w-1/2">
                            <h2 className='text-[28px] sm:text-[28px] md:text-[40px] font-bold md:font-medium'>{item.title}</h2>
                            <h3 className='text-base sm:text-xl mt-2 sm:mt-4'>{item.miniTitle}</h3>
                            <p className='text-sm sm:text-base md:text-lg mt-2 sm:mt-5 text-black/60'>{item.Description}</p>
                            <button className='mt-5 px-5 py-2 bg-black text-white rounded-md text-sm md:text-base'>Explore Now</button>
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-center">
                           <img src={item.img} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            )
        }
      
     
    </Swiper>
    </div>
  )
}

export default Heropart
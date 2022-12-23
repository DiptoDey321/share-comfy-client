import React from 'react'

function WhyUs() {
  return (
    <div className="mx-[10%] my-20">
        <div className=' flex justify-around mt-10 items-start'>
        <div className="flex flex-col justify-center items-center">
            <div className='w-10 sm:w-14 h-10 sm:h-14 bg-black flex items-center justify-center rounded-full'>
                <svg className='w-4 h-4' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16V5.33333L8 0L16 5.33333V16H10V9.77778H6V16H0Z" fill="white"/>
                </svg>
            </div>
            <h2 className='text-xs sm:text-base font-medium mt-2 text-center'>Free Shipping</h2>
            <p className='text-[10px] sm:text-base text-black/60 text-center mt-2'>Enjoy fully free Shipping At <br /> your doorstep</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className='w-10 sm:w-14 h-10 sm:h-14 bg-black flex items-center justify-center rounded-full'>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.75 0C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75V4H16V2.75C16 2.02065 15.7103 1.32118 15.1945 0.805456C14.6788 0.289731 13.9793 0 13.25 0H2.75ZM16 5H0V9.25C0 9.97935 0.289731 10.6788 0.805456 11.1945C1.32118 11.7103 2.02065 12 2.75 12H13.25C13.9793 12 14.6788 11.7103 15.1945 11.1945C15.7103 10.6788 16 9.97935 16 9.25V5ZM11.5 9H13.5C13.6326 9 13.7598 9.05268 13.8536 9.14645C13.9473 9.24021 14 9.36739 14 9.5C14 9.63261 13.9473 9.75979 13.8536 9.85355C13.7598 9.94732 13.6326 10 13.5 10H11.5C11.3674 10 11.2402 9.94732 11.1464 9.85355C11.0527 9.75979 11 9.63261 11 9.5C11 9.36739 11.0527 9.24021 11.1464 9.14645C11.2402 9.05268 11.3674 9 11.5 9Z" fill="white"/>
                </svg>
            </div>
            <h2 className='text-xs sm:text-base font-medium mt-2 text-center'>Securety Payments </h2>
            <p className='text-[10px] sm:text-base text-black/60 text-center mt-2'>Payment thorugh the most secure <br /> payment method</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className='w-10 sm:w-14 h-10 sm:h-14 bg-black flex items-center justify-center rounded-full'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7863 1.72863e-05V4.41239H12.5725V9.01081H5.57308V6.43395L0 11.217L5.57309 16V13.4231H16V0H10.7863V1.72863e-05Z" fill="white"/>
                </svg>
            </div>
            <h2 className='text-xs sm:text-base font-medium mt-2 text-center'>14-Day Returns </h2>
            <p className='text-[10px] sm:text-base text-black/60 text-center mt-2'> Buy thorugh the app to get <br /> return policy</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className='w-10 sm:w-14 h-10 sm:h-14 bg-black flex items-center justify-center rounded-full'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.376 10.432C13.656 9.68308 13.808 8.88135 13.808 8.00033C13.808 7.366 13.72 6.75809 13.568 6.19424C13.048 6.32639 12.504 6.39688 11.936 6.39688C10.7728 6.39825 9.6263 6.09162 8.59322 5.50284C7.56015 4.91405 6.67074 4.06037 6 3.01376C5.28248 4.92573 3.9289 6.46366 2.216 7.31314C2.184 7.53339 2.184 7.77127 2.184 8.00033C2.184 8.84145 2.33444 9.67434 2.62672 10.4514C2.919 11.2285 3.3474 11.9346 3.88747 12.5294C4.97818 13.7305 6.4575 14.4054 8 14.4054C8.84 14.4054 9.648 14.2027 10.376 13.8415C10.832 14.8018 11.04 15.2776 11.024 15.2776C9.712 15.7621 8.696 16 8 16C6.064 16 4.216 15.163 2.856 13.6565C2.0288 12.7483 1.4139 11.6328 1.064 10.4055H0V6.39688H0.872C1.13619 4.98065 1.74359 3.6696 2.62975 2.60284C3.51591 1.53609 4.64777 0.753417 5.90522 0.337885C7.16268 -0.0776472 8.49883 -0.110543 9.77189 0.242689C11.045 0.595921 12.2074 1.3221 13.136 2.34418C14.1442 3.45009 14.8318 4.86046 15.112 6.39688H16V10.4055H15.952L13.104 13.2865L8.864 12.7578V11.2865H12.728L13.376 10.432M5.816 7.7977C6.056 7.7977 6.288 7.90342 6.456 8.09725C6.62484 8.2847 6.71957 8.53803 6.71957 8.80206C6.71957 9.06609 6.62484 9.31942 6.456 9.50688C6.288 9.69189 6.056 9.79762 5.816 9.79762C5.312 9.79762 4.904 9.35711 4.904 8.80206C4.904 8.24702 5.312 7.7977 5.816 7.7977M10.176 7.7977C10.68 7.7977 11.08 8.24702 11.08 8.80206C11.08 9.35711 10.68 9.79762 10.176 9.79762C9.672 9.79762 9.264 9.35711 9.264 8.80206C9.264 8.53569 9.36009 8.28022 9.53112 8.09187C9.70215 7.90352 9.93412 7.7977 10.176 7.7977V7.7977Z" fill="white"/>
                </svg>
            </div>
            <h2 className='text-xs sm:text-base font-medium mt-2 text-center'>24/7 Support </h2>
            <p className='text-[10px] sm:text-base text-black/60 text-center mt-2'> Get 24/7 support policy to <br /> report or any issue</p>
        </div>
    </div>
    </div>
  )
}

export default WhyUs
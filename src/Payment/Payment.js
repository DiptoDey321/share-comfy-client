import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key); 

// console.log(process.env.REACT_APP_stripe_key);
function Payment() {
    const {id} = useParams();
    const [bookedItem,setBookedItem] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/booking/${id}`)
        .then(res => res.json())
        .then(data =>  setBookedItem(data))
    },[id])

    // console.log(bookedItem);
  return (
    <div>
        <div className="">
            <div className=" ">
                <div class="">
                   <h3 className='text-2xl font-medium'>Payment For "{bookedItem?.productName}"</h3>
                   <p className='text-lg mt-2'>Please, Pay <span className='text-green-700 font-bold'> ${bookedItem?.productPrice}</span> to confirm the booking</p>
                   <div className="w-[500px] mt-10">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm bookedItem={bookedItem} />
                    </Elements>
                   </div>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Payment
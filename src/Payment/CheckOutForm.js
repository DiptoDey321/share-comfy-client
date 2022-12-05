import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'

function CheckOutForm({bookedItem}) {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    const {_id,productPrice,customerName,customerEmail} = bookedItem

    
    // const price = ''
  

    useEffect(() => {
      console.log(productPrice );
      if (productPrice !== undefined) {
      fetch("https://share-comfy-server-coral.vercel.app/create-payment-intent", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify( {price:productPrice} ),
      })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
        }
  }, [productPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
      
        if (error) {
          setCardError(error.message)
        } else {
          setCardError('')
        }
        setSuccess('');
        setProcessing(true);
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: customerName,
                email: customerEmail
              },
            },
          },
        ); 
        if(confirmError){
          setCardError(confirmError.message)
          return
        }
        const payment = {
          productPrice,
          transactionId: paymentIntent.id,
          customerEmail,
          bookingId : _id
        }
        if(paymentIntent.status === "succeeded"){
           
            fetch("https://share-comfy-server-coral.vercel.app/payments",{
              method : "POST",
              headers:{
                "Content-Type": "application/json"
              },
              body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId){
                setSuccess('Payment successfully done')
                setTransactionId(paymentIntent.id)
                console.log(paymentIntent.id);
                console.log(paymentIntent.status);
              }
            })
        }
        setProcessing(false)
        console.log("payment Intent" ,paymentIntent);
    }
    console.log(cardError);
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className='mt-5 px-8 py-1 bg-black text-white rounded' type="submit" disabled={!stripe || !clientSecret || processing }>
                Pay
            </button>
        </form>
        <p className='tetxt-sm text-red-700 mt-2'>{cardError}</p>
        {
          success && <div className="bg-white rounded-lg p-6 mt-5">
             <p className='text-green-600 text-sm flex items-center gap-x-2'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0583 4.69167C17.3833 5.01667 17.3833 5.53333 17.0583 5.85833L7.60833 15.3083C7.53206 15.3855 7.44123 15.4468 7.3411 15.4887C7.24096 15.5305 7.13352 15.552 7.025 15.552C6.91648 15.552 6.80904 15.5305 6.7089 15.4887C6.60877 15.4468 6.51794 15.3855 6.44167 15.3083L2.94167 11.8083C2.86447 11.7321 2.80317 11.6412 2.76134 11.5411C2.71951 11.441 2.69797 11.3335 2.69797 11.225C2.69797 11.1165 2.71951 11.009 2.76134 10.9089C2.80317 10.8088 2.86447 10.7179 2.94167 10.6417C3.01794 10.5645 3.10877 10.5032 3.2089 10.4613C3.30904 10.4195 3.41648 10.398 3.525 10.398C3.63352 10.398 3.74096 10.4195 3.8411 10.4613C3.94123 10.5032 4.03206 10.5645 4.10833 10.6417L7.025 13.5583L15.8917 4.69167C15.9679 4.61447 16.0588 4.55317 16.1589 4.51134C16.259 4.46951 16.3665 4.44797 16.475 4.44797C16.5835 4.44797 16.691 4.46951 16.7911 4.51134C16.8912 4.55317 16.9821 4.61447 17.0583 4.69167V4.69167ZM15.3 2.925L7.025 11.2L4.7 8.875C4.05 8.225 2.99167 8.225 2.34167 8.875L1.175 10.0417C0.525 10.6917 0.525 11.75 1.175 12.4L5.84167 17.0667C6.49167 17.7167 7.55 17.7167 8.2 17.0667L18.825 6.45C19.475 5.8 19.475 4.74167 18.825 4.09167L17.6583 2.925C17 2.275 15.95 2.275 15.3 2.925V2.925Z" fill="#097600"/>
                </svg>
                <span>{success}</span>
              </p>
             <p className='mt-2'>Transation Id : <span className='font-medium'> {transactionId}</span> </p>
             </div>
        }
    </div>
  )
}

export default CheckOutForm
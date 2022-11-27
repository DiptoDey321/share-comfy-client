import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'

function CheckOutForm({bookedItem}) {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    console.log(bookedItem);
    const {productPrice} = bookedItem
    console.log(productPrice);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);

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
            console.log('[PaymentMethod]', paymentMethod);
        }
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
            <button className='mt-5 px-8 py-1 bg-black text-white rounded' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        <p className='tetxt-sm text-red-700 mt-2'>{cardError}</p>
    </div>
  )
}

export default CheckOutForm
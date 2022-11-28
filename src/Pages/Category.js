import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../Authentication/Authentication';
// import json from ''

function Category() {
  const { user } = useContext(AuthContext)
  const { id } = useParams();
  const [bookedItem, setBookedItme] = useState([]);
  const [products, setproducts] = useState([]);
  const [bookModal, setBookModal] = useState(false)
  const  [loading,setloading] = useState(false);

  useEffect(() => {
    fetch(`https://share-comfy-server.vercel.app/products/${id}`)
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [id])

  console.log(bookedItem);

  const bookedItemHandler = (product) => {
    setBookedItme(product);
    setBookModal(true);
  }
  const closeModal = () =>{
    setBookModal(false);
  }

  const submitBookedItems = (event) =>{
    setloading(true)
    event.preventDefault()
    const bookedItems = {
      customerName : event.target.customerName.value,
      customerEmail : event.target.customerEmail.value,
      productName : event.target.productName.value,
      productPrice : Number(event.target.productPrice.value),
      customerNumber : event.target.customerNumber.value,
      customerLocation : event.target.customerLocation.value,
      bookedDate  : new Date().toJSON().slice(0, 10),
      picture : bookedItem.picture
    }
    fetch('https://share-comfy-server.vercel.app/bookingProducts',{
      method : 'POST',
      headers : {
          'content-type' : 'application/json'
      },
      body : JSON.stringify(bookedItems)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            toast.success(` ${event.target.productName.value} added on your order cart`)
            setloading(false);
            event.target.reset();
            setBookModal(false);
        }
    })
  }


  return (
    <div className="">
      <div className='mx-[5%] my-20 mb-[100px]'>
        {
          products &&
          <div className="flex flex-wrap gap-10 items-center justify-center">
            {
              products.map(product =>
                <div key={product._id} className="h-fit border rounded-[10px]">
                  <div className="border rounded-t-[10px]">
                    <img className='w-[500px] h-[400px] rounded-t-[10px]' src={product.picture} alt="" />
                  </div>
                  <div className="mx-3 pb-3">
                    <h2 className='mt-3 text-lg font-bold text-black/80'>{product.name}</h2>
                    <h3 className='text-lg mb-3 text-black/70 flex items-center gap-x-2'>
                      Seller - <span className='font-medium'>{product.SellerName}</span>
                      <span>
                        {product?.verification?
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 11L19.56 8.22004L19.9 4.54004L16.29 3.72004L14.4 0.540039L11 2.00004L7.6 0.540039L5.71 3.72004L2.1 4.53004L2.44 8.21004L0 11L2.44 13.78L2.1 17.47L5.71 18.29L7.6 21.47L11 20L14.4 21.46L16.29 18.28L19.9 17.46L19.56 13.78L22 11ZM9 16L5 12L6.41 10.59L9 13.17L15.59 6.58004L17 8.00004L9 16Z" fill="#5566FF"/>
                          </svg> 
                        :

                        ''}
                      </span> </h3>
                    <div className="border-t py-2.5">
                      <div className="flex justify-between mt-2 ">
                        <p className='text-sm'>Resell Price : <span className='font-medium text-green-800'>$ {product.resellPrice}</span></p>
                        <p className='text-sm'>Orginal Price : <span className='font-medium text-green-800'>${product.OrginalPrice}</span></p>
                      </div>
                      <div className="flex justify-between ">
                        <p className='text-sm mt-2'>Post On : {product.postTime}</p>
                        <p className='text-sm mt-2'>Used : {product.yearsOfUse} years</p>
                      </div>
                      <p className='mt-2 flex gap-x-2 items-center text-sm'>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 9.99999C10.4583 9.99999 10.8508 9.83666 11.1775 9.50999C11.5036 9.18388 11.6667 8.79166 11.6667 8.33332C11.6667 7.87499 11.5036 7.48249 11.1775 7.15582C10.8508 6.82971 10.4583 6.66666 10 6.66666C9.54168 6.66666 9.14946 6.82971 8.82334 7.15582C8.49668 7.48249 8.33334 7.87499 8.33334 8.33332C8.33334 8.79166 8.49668 9.18388 8.82334 9.50999C9.14946 9.83666 9.54168 9.99999 10 9.99999ZM10 18.0208C9.8889 18.0208 9.77779 18 9.66668 17.9583C9.55557 17.9167 9.45834 17.8611 9.37501 17.7917C7.34723 16 5.83334 14.3369 4.83334 12.8025C3.83334 11.2675 3.33334 9.83332 3.33334 8.49999C3.33334 6.41666 4.00362 4.75693 5.34418 3.52082C6.68418 2.28471 8.23612 1.66666 10 1.66666C11.7639 1.66666 13.3158 2.28471 14.6558 3.52082C15.9964 4.75693 16.6667 6.41666 16.6667 8.49999C16.6667 9.83332 16.1667 11.2675 15.1667 12.8025C14.1667 14.3369 12.6528 16 10.625 17.7917C10.5417 17.8611 10.4445 17.9167 10.3333 17.9583C10.2222 18 10.1111 18.0208 10 18.0208Z" fill="black" />
                          </svg>
                        </span>
                        <span>{product.location}</span>
                      </p>
                    </div>
                    <div className="flex justify-center my-3">
                      <button onClick={() => bookedItemHandler(product)} className='px-10 py-2 text-white bg-black rounded-lg text-sm'>Book Now</button>
                    </div>

                  </div>
                </div>
              )
            }
          </div>
        }
      </div>
      {
        bookModal &&
        <div className="h-full w-full fixed top-0 left-0">
          <div className="bg-black/25 w-full h-full flex flex-col items-center justify-center ">
            <div class="w-[600px] bg-white px-10 pt-16 pb-10 rounded-lg relative">
              <form onSubmit={submitBookedItems} className=''>
                <div className="flex gap-x-3">
                  <div className="w-2/5">
                    <label htmlFor="customerName" className='text-sm font-medium text-gray-700'>Your Name </label> <br />
                    <input name='customerName' id='customerName' className='text-sm border w-full p-2.5 rounded-sm mt-2 text-gray-600' value={user?.displayName} type="text" disabled />
                  </div>
                  <div className="w-3/5">
                    <label htmlFor="customerEmail" className='text-sm font-medium text-gray-700'>Your Email </label> <br />
                    <input name='customerEmail' id='customerEmail' className='text-sm border w-full p-2.5 rounded-sm mt-2 text-gray-600' value={user?.email} type="text" disabled />
                  </div>
                </div>

                <div className="flex gap-x-3 mt-4">
                  <div className="w-2/3">
                    <label htmlFor="productName" className='text-sm font-medium text-gray-700'>product Name </label> <br />
                    <input name='productName' id='productName' className='text-sm border w-full p-2.5 rounded-sm mt-2 text-gray-600' value={bookedItem?.name} type="text" disabled />
                  </div>
                  <div className="w-1/3">
                    <label htmlFor="productPrice" className='text-sm font-medium text-gray-700'>Product Price</label> <br />
                    <input name='productPrice' id='productPrice' className='text-sm border w-full p-2.5 rounded-sm mt-2 text-gray-600' value={bookedItem?.resellPrice} type="text" disabled />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="customerNumber" className='text-sm font-medium text-gray-700'>Your Mobile Number </label> <br />
                  <input id='customerNumber' name='customerNumber' className='text-sm border w-full p-2.5 rounded-sm mt-2 text-gray-600' placeholder='Ex : 01923-000000' type="text" />
                </div>

                <div className="mt-4">
                  <label htmlFor="customerLocation" className='text-sm font-medium text-gray-700'>Product Recicve Location </label> <br />
                  <input name='customerLocation' id='customerLocation' className='text-sm border w-full p-2.5 rounded-sm mt-2 text-gray-600' placeholder='Ex : Ghulshan 1, Dhaka' type="text" />
                </div>

                <div className="mt-4 flex justify-center">
                  <button type="submit" className='text-sm px-16 py-2 text-white bg-black  rounded-lg'>Submit</button>
                </div>

              </form>

              <div className="absolute top-3 right-3">
                  <button onClick={closeModal} className='text-[10px] w-5 h-5 rounded-full bg-black/80 text-white flex items-center justify-center'> 
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.705 1.70498L10.295 0.294983L6.00004 4.58998L1.70504 0.294983L0.295044 1.70498L4.59004 5.99998L0.295044 10.295L1.70504 11.705L6.00004 7.40998L10.295 11.705L11.705 10.295L7.41004 5.99998L11.705 1.70498Z" fill="white"/>
                    </svg>
                </button>
              </div>

            </div>
          </div>
        </div>
      }
      {
        loading && <div className="h-full w-full fixed top-0 left-0">
            <div className="bg-slate-50/80 w-full h-full flex flex-col items-center justify-center ">
                <div class="lds-dual-ring "></div>
                <p className='text-xl mt-5'>Loading.....</p>
            </div>   
        </div>
       }

    </div>
  )
}

export default Category
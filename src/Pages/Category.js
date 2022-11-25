import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import json from ''

function Category() {
  const {id} = useParams();
  console.log(id);
  const [products,setproducts] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setproducts(data))
    },[id])
    console.log(products);
  return (
    <div className='mx-[10%] my-20 mb-[100px]'>
      {
        products &&
        <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          products.map(product => 
            <div className="h-fit border rounded-[10px]">
              <div className="border rounded-t-[10px]">
                <img className='w-[500px] h-[400px] rounded-t-[10px]' src={product.picture} alt="" />
              </div>
              <div className="mx-3 pb-3">
                <h2 className='mt-3 text-lg font-bold text-black/80'>{product.name}</h2>
                <h3 className='text-lg mb-3 text-black/70'>Seller - <span className='font-medium'>{product.SellerName}</span> </h3>
                <div className="border-t py-2.5">
                  <div className="flex justify-between mt-2 ">
                    <p className='text-sm'>Resell Price : <span className='font-medium text-green-800'>$ {product.resellPrice}</span></p>
                    <p className='text-sm'>Orginal Price : <span className='font-medium text-green-800'>${product.OrginalPrice}</span></p>
                  </div>
                  <div className="flex justify-between ">
                    <p className='text-sm mt-2'>Post On : {product.postTime} years</p>
                    <p className='text-sm mt-2'>Used : {product.yearsOfUse} years</p>
                  </div>
                  <p className='mt-2 flex gap-x-2 items-center text-sm'>
                    <span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 9.99999C10.4583 9.99999 10.8508 9.83666 11.1775 9.50999C11.5036 9.18388 11.6667 8.79166 11.6667 8.33332C11.6667 7.87499 11.5036 7.48249 11.1775 7.15582C10.8508 6.82971 10.4583 6.66666 10 6.66666C9.54168 6.66666 9.14946 6.82971 8.82334 7.15582C8.49668 7.48249 8.33334 7.87499 8.33334 8.33332C8.33334 8.79166 8.49668 9.18388 8.82334 9.50999C9.14946 9.83666 9.54168 9.99999 10 9.99999ZM10 18.0208C9.8889 18.0208 9.77779 18 9.66668 17.9583C9.55557 17.9167 9.45834 17.8611 9.37501 17.7917C7.34723 16 5.83334 14.3369 4.83334 12.8025C3.83334 11.2675 3.33334 9.83332 3.33334 8.49999C3.33334 6.41666 4.00362 4.75693 5.34418 3.52082C6.68418 2.28471 8.23612 1.66666 10 1.66666C11.7639 1.66666 13.3158 2.28471 14.6558 3.52082C15.9964 4.75693 16.6667 6.41666 16.6667 8.49999C16.6667 9.83332 16.1667 11.2675 15.1667 12.8025C14.1667 14.3369 12.6528 16 10.625 17.7917C10.5417 17.8611 10.4445 17.9167 10.3333 17.9583C10.2222 18 10.1111 18.0208 10 18.0208Z" fill="black"/>
                      </svg>
                    </span>
                    <span>{product.location}</span>
                  </p>
                </div>
                <div className="flex justify-center my-3">
                  <button className='px-10 py-2 text-white bg-black rounded-lg text-sm'>Book Now</button>
                </div>
               
              </div>
            </div>
          )
        }
      </div>
      }
    </div>
  )
}

export default Category
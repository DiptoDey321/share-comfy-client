import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Authentication/Authentication';

function AddProduct() {
    const imageApiKey = process.env.REACT_APP_imgbb_key;
    const  [loading,setloading] = useState(false);
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleAddProductForm = (event) =>{
        event.preventDefault()
        setloading(true)
        const img = event.target.image.files[0];
        const formData = new FormData();
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`
        fetch(url,{
            method : 'POST',
            body : formData
        })
        .then(res => res.json())
        .then (imageData => {
            if(imageData.success){
                const product = {
                    name : event.target.productName.value,
                    email : user.email,
                    picture : imageData.data.url,
                    category :  event.target.productCategory.value,
                    resellPrice : Number(event.target.productPrice.value),
                    OrginalPrice : Number(event.target.orginalPrice.value),
                    yearsOfUse : Number(event.target.yearsOfUse.value),
                    postTime  : new Date().toJSON().slice(0, 10),
                    SellerName : user.displayName,
                    phone : event.target.mobileNumber.value,
                    condition : event.target.ProductCondition.value,
                    location : event.target.location.value,
                }
                console.log(product);

                fetch('http://localhost:5000/products',{
                    method : 'POST',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(product)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        setloading(false);
                        toast.success(` "${event.target.productName.value}" added successfully`)
                        event.target.reset();
                        navigate('/dashboard/my-product')
                    }
                })
            }
        })

    }
    

  return (
    <div>
        <h2 className='text-2xl font-medium text-black/70'> Add the Product you want to sell</h2>
        <form onSubmit={handleAddProductForm} className='mt-10'>
            <div className="mb-6 flex gap-x-5">
                <div className="w-1/3">
                    <label htmlFor="productName" className="block mb-2 text-sm font-medium text-black">Product Name</label>
                    <input type="text" id="productName" name='productName' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex : Study table" required/>
                </div> 
                <div className="w-1/3">
                    <label htmlFor="productPrice" className="block mb-2 text-sm font-medium text-gray-900 ">Resell Price </label>
                    <input type="number" id="productPrice" name='productPrice' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex : $50" required/>
                </div>
                <div className="w-1/3">
                    <label htmlFor="orginalPrice" className="block mb-2 text-sm font-medium text-gray-900">Orginal price</label>
                    <input type="text" id="orginalPrice" name='orginalPrice' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex : $500 " required/>
                </div>
               
            </div>
            <div className="mb-6 flex gap-x-5">
                <div className="w-1/4">
                    <label htmlFor="condition" className="block mb-2 text-sm font-medium text-gray-900">Product Conditions</label>
                    <select className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' name="ProductCondition" id="condition">
                        <option value="Fair">Fair</option>
                        <option value="Good">Good</option>
                        <option value="Excellent">Excellent</option>
                    </select>
                </div>
                <div className="w-1/4">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Product Categroy</label>
                    <select className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' name="productCategory" id="category">
                        <option value="workSpaceFurniture">Workspace Furniture</option>
                        <option value="kitchenFurnture">Kitchen Furniture</option>
                        <option value="homeFurniture">Home Furniture</option>
                    </select>
                </div>
                <div className="w-1/4">
                    <label htmlFor="yearsOfUse" className="block mb-2 text-sm font-medium text-gray-900">Years of Use</label>
                    <input type="text" name='yearsOfUse' id="yearsOfUse" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex : 1 " required/>
                </div>
                <div className="w-1/4">
                    <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">Your Mobile Number</label>
                    <input type="text" name='mobileNumber' id="mobileNumber" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex : +880172723274" required/>
                </div>
            </div>
            <div className="flex items-center gap-x-5 mb-6">
                <div className="1/4">
                    <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900">product image</label>
                    <input name="image" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-[8.5px]' type="file" id="img"/>
                </div>
               <div className="w-3/4">
                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">Your Location</label>
                    <input name='location' type="text" id="location" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ex : 12no len, Gulshan 1, Dhaka" required/>
               </div>
            </div>
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
        </form>

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

export default AddProduct
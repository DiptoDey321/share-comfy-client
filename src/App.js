import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css'
import DashboardLayout from './Layout/DashboardLayout';
import Layout from './Layout/Layout';
import Category from './Pages/Category';
import AboutMe from './Pages/Dashboard/AboutMe';
import AddProduct from './Pages/Dashboard/AddProduct';
import AllBuyer from './Pages/Dashboard/AllBuyer';
import AllSeller from './Pages/Dashboard/AllSeller';
import Myorders from './Pages/Dashboard/Myorders';
import MyProducts from './Pages/Dashboard/MyProducts';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout></Layout>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/category/:id',
          element : <Category></Category>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        }
      ]
    },
    {
      path : '/dashboard',
      element : <DashboardLayout></DashboardLayout>,
      children : [
        {
          path : '/dashboard',
          element : <AboutMe></AboutMe>
        },
        {
          path : '/dashboard/all-Seller',
          element : <AllSeller></AllSeller>
        },
        {
          path : '/dashboard/all-buyer',
          element : <AllBuyer></AllBuyer>
        },
        {
          path : '/dashboard/add-product',
          element : <AddProduct></AddProduct>
        },
        {
          path : '/dashboard/my-product',
          element : <MyProducts></MyProducts>
        },
        {
          path : '/dashboard/my-order',
          element : <Myorders></Myorders>
        },
        
      ]

    }
  ])
  return (
    <div className="bg-[#868686]/10">
      <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
    </div>
  )
}

export default App;

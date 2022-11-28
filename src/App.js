import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css'
import DashboardLayout from './Layout/DashboardLayout';
import Layout from './Layout/Layout';
import Blog from './Pages/Blog';
import Category from './Pages/Category';
import AboutMe from './Pages/Dashboard/AboutMe';
import AddProduct from './Pages/Dashboard/AddProduct';
import AllBuyer from './Pages/Dashboard/AllBuyer';
import AllSeller from './Pages/Dashboard/AllSeller';
import Myorders from './Pages/Dashboard/Myorders';
import MyProducts from './Pages/Dashboard/MyProducts';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NotFoundPage from './Pages/NotFoundPage';
import Register from './Pages/Register';
import Payment from './Payment/Payment';
import PrivateRouting from './PrivateRouting/PrivateRouting';

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
          element : <PrivateRouting><Category></Category></PrivateRouting>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        },
        {
          path : '/blog',
          element : <Blog></Blog>
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
        {
          path : '/dashboard/payment/:id',
          element : <Payment></Payment>
        },
        
      ]

    },
    {
      path : '*',
      element : <NotFoundPage></NotFoundPage>,
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

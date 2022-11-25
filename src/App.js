import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Category from './Pages/Category';
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
    }
  ])
  return (
    <div className="bg-[#868686]/10">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;

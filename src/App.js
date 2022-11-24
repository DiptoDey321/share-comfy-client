 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout></Layout>,
      children : [
        {
          path : '/',
          element : <Home></Home>
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

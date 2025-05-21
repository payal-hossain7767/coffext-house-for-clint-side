import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layout/Root.jsx';
import Home from './conponenet/Home.jsx';
import Addcoffee from './conponenet/Addcoffee.jsx';
import UbDateCoffee from './conponenet/UbDateCoffee.jsx';
import CoffeeDetails from './conponenet/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, loader: () => fetch('http://localhost:3000/coffees'), Component: Home },
      { path: '/addcoffee', Component: Addcoffee },


      { path: 'ubdatecoffee/:id', 
        
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),

         Component: UbDateCoffee },
      

      { path: 'coffee/:id', loader: ({ params }) => fetch(`http://localhost:5173/coffee/${params.id }`), Component: CoffeeDetails },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Meals from './Component/Meals/Meals.jsx';
import MealDetails from './Component/MealDetails/MealDetails.jsx';

const router = createBrowserRouter([

  {
    path : '/',
    element :<Home></Home>,
    children:[
    {
      path: '/About',
      element:<About></About>
    },
    {
      path: '/Contact',
      element:<Contact></Contact> 
    },
    // {
    //   path:'/Meals',
    //   element:<Meals></Meals>
    // },
    {
      path:'/Meals',
      loader:() => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
      element:<Meals></Meals>
    },
    {
      path:'/Meal/:MealId',
      loader:({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.MealId}`),
      element:<MealDetails></MealDetails>
    },







    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

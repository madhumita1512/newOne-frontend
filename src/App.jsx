import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {useEffect, useState } from 'react'
import Signin from "./Signin";
import Layout from "./Layout";
import axios from "axios";

const App =()=>{
  useEffect(()=>
  {
    axios.get('https://expensetracker-aj69.onrender.com/get-entry')
    .then(res =>{
      console.log(res.data)
      setExpenses(res.data)
    })
    .catch(err => console.log(err))
  },[])
  const router = createBrowserRouter([
    {
    path:"/",
    element:<Layout />,
    children:[
    {
       path:"/", element:<Signin />},
    ]
 },
]);
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App
import React,{useState,useContext,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { StoreContext } from '../context/StoreContext'

const Detail = () => {
    const {id} =useParams()
    const {url}=useContext(StoreContext)
    const [food,setFood]=useState({})
    const showDetail=async()=>{
      const response=await axios.get(`${url}/api/food/get/${id}`)
      console.log(id)
      if(response.data.success){
        setFood(response.data.data)
        toast.success(response.data.message)
      }else{
        toast.error('Something went wrong!')
      }
    }
    useEffect(()=>{
       showDetail()
    },[])
  return (
    <div className='p-8'>
      <h1 className='text-2xl text-green-600'>Food Detail</h1>
      <p>{food.name}</p>
      <p>{food.description}</p>
      <p>{food.price}</p>
    </div>
  )
}

export default Detail

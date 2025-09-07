import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import url from '../assets/url'


const FoodUpdate = () => {
    const {id} = useParams()
    const [food,setFood] = useState({})
    useEffect(()=>{
        const FetchFoodItem = async ()=>{
            const res = await axios.get(`${url}/api/food/`)
        }
    },[id])
  return (
    <div>
    
    </div>
  )
}

export default FoodUpdate
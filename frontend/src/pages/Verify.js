import React, { useEffect, useContext } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { StoreContext } from './../context/StoreContext'

const Verify = () => {
  const { url } = useContext(StoreContext)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const verifyPayment = async () => {
    try {
      const response = await axios.post(`${url}/api/order/verify`, { success, orderId })
      if (response.data.success) {
        navigate('/myorders')
      } else {
        navigate('/')
      }
    } catch (err) {
      navigate('/')
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        {/* Text */}
        <p className="mt-6 text-gray-700 text-lg font-medium">
          Verifying your payment, please wait...
        </p>
      </div>
    </div>
  )
}

export default Verify

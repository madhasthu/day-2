import React, { useEffect, useState } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2, Pencil, Trash, TriangleAlert } from 'lucide-react'
import { getOrders } from '../../api/api'

const AdminOrders = () => {
  const [orders, setOrders] = useState([]) // Initialize with an empty array
  const [loading, setLoading] = useState(true)

  // Fetch orders from the API
  const fetchData = async () => {
    try {
      const res = await getOrders()
      if (res.status === 200 && Array.isArray(res.data)) {
        setOrders(res.data)  // Make sure it's an array
      } else {
        setOrders([])  // Fallback to an empty array if not an array
      }
    } catch (error) {
      console.log(error)
      setOrders([])  // Fallback to empty array in case of error
    } finally {
      setLoading(false)
    }
  }

  // Effect hook to fetch data on mount
  useEffect(() => {
    fetchData()
  }, [])

  // Loading state
  if (loading) {
    return (
      <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
        <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
      </div>
    )
  }

  // No orders state
  if (orders.length === 0) {
    return (
      <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
        <TriangleAlert className='text-orange-400 h-12 w-12' />
        <p>No Orders Available!</p>
      </div>
    )
  }

  // Render the orders table
  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <AdminPageHeader title='Orders' />
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-sm font-bold text-opacity-80 text-purple-500 text-left'>
          <tr>
            <th className='p-6'>UID</th>
            <th className='p-6'>Phone</th>
            <th className='p-6'>Price</th>
            <th className='p-6'>Email</th>
            <th className='p-6'>OrderDate</th>
            <th className='p-6'>ShippingDate</th>
            <th className='p-6'>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.userID}>
              <td className='p-4'>{order.userID}</td>
              <td className='p-4'>{order.phone}</td>
              <td className='p-4'>{order.price}</td>
              <td className='p-4'>{order.email}</td>
              <td className='p-4'>{order.orderDate}</td>
              <td className='p-4'>{order.shippingDate}</td>
              <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
                <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                  <Pencil />
                </button>
                <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminOrders

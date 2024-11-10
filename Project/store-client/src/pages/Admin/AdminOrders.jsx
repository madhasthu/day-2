import React from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Pencil, Trash } from 'lucide-react'

const AdminOrders = () => {
    return (
        <div className='w-full h-full flex flex-col justify-start items-start'>
            <AdminPageHeader title='Orders' />

            <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
                <thead className='shadow-sm font-bold text-purple-500 text-left'>
                    <tr>
                        <th className='p-6'>Order</th>
                        <th className='p-6'>Address</th>
                        <th className='p-6'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-4'> Product  </td>
                        <td className='p-4'>  JNTUH Jagtial</td>
                        <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
                            <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                                <Pencil />
                            </button>
                            <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                                <Trash />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-4'> Product1</td>
                        <td className='p-4'>  coimbatore</td>
                        <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
                            <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                                <Pencil />
                            </button>
                            <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                                <Trash />
                            </button>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>



    )
}

export default AdminOrders
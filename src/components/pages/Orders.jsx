import React, { useState } from 'react'
import { Link } from 'react-router'
import SideBar from '../common/SideBar'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { FaUser } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { MdFilterListAlt } from "react-icons/md";
import { MdFilterAltOff } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import Modal from '../elements/Modal'
import Breadcrumb from '../common/Breadcrumb';







export default function Orders() {

    let [searchfilter, setSearchfilter] = useState(true)

    return (
        <>


            <Breadcrumb fst_para={<><FaPenToSquare className='text-blue-500' /> Orders</>} fst_path="/order/view" snd_para="View" />


            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10'>


                <div className={`
                                p-4 border-1 border-stone-400 w-full flex gap-2 rounded-lg mb-5
                                ${searchfilter ? "hidden" : ""}
                                    `}>
                    <input type="text" name="" id="" className='h-[40px] w-100 rounded-lg' />
                    <button className='bg-blue-600 text-white h-[40px] px-5 rounded-lg cursor-pointer'>
                        <IoSearchSharp />
                    </button>
                </div>



                <div className='border-1 w-full rounded-xl'>
                    <div className='bg-slate-100 border-b-1 flex justify-between items-center py-5 px-10 rounded-xl'>
                        <h1 className='text-2xl font-semibold'>
                            Order's List
                        </h1>
                        <div className='flex items-center justify-start gap-3'>
                            <button className='bg-blue-600 text-white p-3 rounded-lg cursor-pointer' onClick={() => setSearchfilter(!searchfilter)}>
                                {searchfilter ? <MdFilterListAlt /> : <MdFilterAltOff />}

                            </button>
                            <button className='bg-green-700 text-white py-2 px-5 rounded-lg cursor-pointer font-bold'>
                                Change Status
                            </button>
                            <button className='bg-red-700 text-white py-2 px-5 rounded-lg cursor-pointer font-bold'>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div>
                        {/* ////////////////////////////////////////////////////////////// */}



                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-b-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className=''>
                                        <th scope="col" className="px-6 py-3">
                                            <input type="checkbox" name="" id="" />
                                            <span className='ml-2'>
                                                Delete
                                            </span>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Sl. No.
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Order ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            View
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            01
                                        </th>
                                        <td className="px-6 py-4">
                                            Frank01
                                        </td>
                                        <td className="px-6 py-4">
                                            Roshan Chaurasia
                                        </td>
                                        <td className="px-6 py-4">
                                            2
                                        </td>
                                        <td className="px-6 py-4">
                                            ₹ 3500
                                        </td>
                                        <td className="px-6 py-4">
                                            10/06/2024
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className='text-yellow-500'>
                                                Processing...
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {/* <button className='border-1 border-stone-400 p-2 rounded-2xl cursor-pointer'>
                                                            View
                                                        </button> */}

                                            <Modal />

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        {/* ////////////////////////////////////////////////////////////// */}
                    </div>
                </div>

            </div>



        </>
    )
}
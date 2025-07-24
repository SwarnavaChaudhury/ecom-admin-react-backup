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
import { FaBagShopping } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Breadcrumb from '../common/Breadcrumb';






export default function ProductView() {

    let [searchfilter, setSearchfilter] = useState(true)

    return (
        <>



            <Breadcrumb fst_para={<><FaBagShopping className='text-blue-500' /> Products</>} fst_path="/product/view" snd_para="View" />


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
                            View Parent Category
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
                                            &nbsp;
                                            Delete
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            S. No.
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Product Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Short Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Thumbnails
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            Men's
                                        </td>
                                        <td className="px-6 py-4">
                                            Lorem, ipsum dolor...
                                            <span className='block text-blue-600 font-medium cursor-pointer'>Read More</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            Lorem, ipsum dolor...
                                            <span className='block text-blue-600 font-medium cursor-pointer'>Read More</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" alt="" className='w-15 rounded-lg' />
                                        </td>
                                        <td className="px-6 py-4">

                                            <button className='text-red-600 text-[20px] cursor-pointer mr-2'>
                                                <RiDeleteBin6Line />
                                            </button>
                                            |
                                            <button className='text-yellow-500 text-[20px] cursor-pointer ml-2'>
                                                <FaEdit />
                                            </button>

                                        </td>
                                        <td className="px-6 py-4">

                                            <span className=''>
                                                Active
                                            </span>

                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            2
                                        </th>
                                        <td className="px-6 py-4">
                                            Men's
                                        </td>
                                        <td className="px-6 py-4">
                                            Lorem, ipsum dolor...
                                            <span className='block text-blue-600 font-medium cursor-pointer'>Read More</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            Lorem, ipsum dolor...
                                            <span className='block text-blue-600 font-medium cursor-pointer'>Read More</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" alt="" className='w-15 rounded-lg' />
                                        </td>
                                        <td className="px-6 py-4">

                                            <button className='text-red-600 text-[20px] cursor-pointer mr-2'>
                                                <RiDeleteBin6Line />
                                            </button>
                                            |
                                            <button className='text-yellow-500 text-[20px] cursor-pointer ml-2'>
                                                <FaEdit />
                                            </button>

                                        </td>
                                        <td className="px-6 py-4">

                                            <span className=''>
                                                Active
                                            </span>

                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            3
                                        </th>
                                        <td className="px-6 py-4">
                                            Men's
                                        </td>
                                        <td className="px-6 py-4">
                                            Lorem, ipsum dolor...
                                            <span className='block text-blue-600 font-medium cursor-pointer'>Read More</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            Lorem, ipsum dolor...
                                            <span className='block text-blue-600 font-medium cursor-pointer'>Read More</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" alt="" className='w-15 rounded-lg' />
                                        </td>
                                        <td className="px-6 py-4">

                                            <button className='text-red-600 text-[20px] cursor-pointer mr-2'>
                                                <RiDeleteBin6Line />
                                            </button>
                                            |
                                            <button className='text-yellow-500 text-[20px] cursor-pointer ml-2'>
                                                <FaEdit />
                                            </button>

                                        </td>
                                        <td className="px-6 py-4">

                                            <span className=''>
                                                Active
                                            </span>

                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            4
                                        </th>
                                        <td className="px-6 py-4">
                                            Men's
                                        </td>
                                        <td className="px-6 py-4">
                                            Lorem, ipsum dolor...
                                            <span className='block text-blue-600 font-medium cursor-pointer'>Read More</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            Lorem, ipsum dolor...
                                            <span className='block text-blue-600 font-medium cursor-pointer'>Read More</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" alt="" className='w-15 rounded-lg' />
                                        </td>
                                        <td className="px-6 py-4">

                                            <button className='text-red-600 text-[20px] cursor-pointer mr-2'>
                                                <RiDeleteBin6Line />
                                            </button>
                                            |
                                            <button className='text-yellow-500 text-[20px] cursor-pointer ml-2'>
                                                <FaEdit />
                                            </button>

                                        </td>
                                        <td className="px-6 py-4">

                                            <span className=''>
                                                Active
                                            </span>

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
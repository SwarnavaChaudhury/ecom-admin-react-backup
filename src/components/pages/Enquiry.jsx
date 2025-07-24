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
import Breadcrumb from '../common/Breadcrumb'








export default function Enquiry() {


    let [searchfilter, setSearchfilter] = useState(true)



    return (
        <>


            <Breadcrumb fst_para={<>Enquiry</>} fst_path="/enquiry" snd_para="View" />








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
                            Contact Enquiry Management
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
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            User Info
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Mobile Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Kuman Bhattachariya
                                        </th>
                                        <td className="px-6 py-4">
                                            kumar11@gmail.com
                                        </td>
                                        <td className="px-6 py-4">
                                            9865226965
                                        </td>
                                        <td className="px-6 py-4">

                                            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                Active
                                            </button>

                                        </td>
                                        <td className="px-6 py-4">
                                            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                <FaPen />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Jaduraj Sen
                                        </th>
                                        <td className="px-6 py-4">
                                            jaduraj.sn@gmail.com
                                        </td>
                                        <td className="px-6 py-4">
                                            9888545856
                                        </td>
                                        <td className="px-6 py-4">

                                            <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                Inactive
                                            </button>

                                        </td>
                                        <td className="px-6 py-4">
                                            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                <FaPen />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Saptarshi Sharma
                                        </th>
                                        <td className="px-6 py-4">
                                            saptarchi.ss@gmail.com
                                        </td>
                                        <td className="px-6 py-4">
                                            5565225458
                                        </td>
                                        <td className="px-6 py-4">

                                            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                Active
                                            </button>

                                        </td>
                                        <td className="px-6 py-4">
                                            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                <FaPen />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Debendu Roy
                                        </th>
                                        <td className="px-6 py-4">
                                            debendu@gmail.com
                                        </td>
                                        <td className="px-6 py-4">
                                            9856525425
                                        </td>
                                        <td className="px-6 py-4">

                                            <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                Inactive
                                            </button>

                                        </td>
                                        <td className="px-6 py-4">
                                            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                <FaPen />
                                            </button>
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

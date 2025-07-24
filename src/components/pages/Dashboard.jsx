import React from 'react'
import { Link } from 'react-router'
import SideBar from '../common/SideBar'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { MdHomeFilled } from "react-icons/md";
import { IoPieChart } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";




export default function Dashboard() {
    return (
        <>
            <div className='w-full flex items-center justify-start gap-2 text-stone-700 border-0 border-b-2 border-stone-400 py-2 mb-5 text-xl'>

                <Link to='/home' className='flex items-center justify-start gap-1'>
                    <MdHomeFilled className='text-blue-500' />
                    Home
                </Link>
                /
                <Link to='/dashboard' className='flex items-center justify-start gap-1'>
                    <IoPieChart className='text-blue-500' />
                    Dashboard
                </Link>

            </div>



            <div className='max-w-[1320px] mx-auto grid grid-cols-3 gap-3 mb-50 mt-10'>

                <div className='bg-[#5956D3] w-full h-[180px] p-5 flex justify-between rounded-2xl'>
                    <div>
                        <p className='flex items-end gap-2 text-white'>
                            <span className='flex items-center font-bold text-3xl'>
                                26K
                            </span>
                            <span className='flex items-center'>
                                ( -12.4% <FaArrowDownLong /> )
                            </span>
                        </p>
                        <p className='text-white font-bold text-2xl'>
                            Users
                        </p>
                    </div>
                    <div className='text-white text-2xl cursor-pointer'>
                        <BsThreeDotsVertical />
                    </div>
                </div>



                <div className='bg-[#2998FE] w-full h-[180px] p-5 flex justify-between rounded-2xl'>
                    <div>
                        <p className='flex items-end gap-2 text-white'>
                            <span className='flex items-center font-bold text-3xl'>
                                $6,200
                            </span>
                            <span className='flex items-center'>
                                ( 40.9% <FaArrowUpLong /> )
                            </span>
                        </p>
                        <p className='text-white font-bold text-2xl'>
                            Product
                        </p>
                    </div>
                    <div className='text-white text-2xl cursor-pointer'>
                        <BsThreeDotsVertical />
                    </div>
                </div>



                <div className='bg-[#FCB01E] w-full h-[180px] p-5 flex justify-between rounded-2xl'>
                    <div>
                        <p className='flex items-end gap-2 text-white'>
                            <span className='flex items-center font-bold text-3xl'>
                                2.49%
                            </span>
                            <span className='flex items-center'>
                                ( 84.7% <FaArrowUpLong /> )
                            </span>
                        </p>
                        <p className='text-white font-bold text-2xl'>
                            Category
                        </p>
                    </div>
                    <div className='text-white text-2xl cursor-pointer'>
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className='bg-[#E95353] w-full h-[180px] p-5 flex justify-between rounded-2xl'>
                    <div>
                        <p className='flex items-end gap-2 text-white'>
                            <span className='flex items-center font-bold text-3xl'>
                                44K
                            </span>
                            <span className='flex items-center'>
                                ( -23.6% <FaArrowDownLong /> )
                            </span>
                        </p>
                        <p className='text-white font-bold text-2xl'>
                            Orders
                        </p>
                    </div>
                    <div className='text-white text-2xl cursor-pointer'>
                        <BsThreeDotsVertical />
                    </div>
                </div>

            </div>
        </>
    )
}

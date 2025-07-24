import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";







export default function Header() {

    let [profileMenu, setProfileMenu] = useState(false)

    return (
        <>
            <section className='flex justify-between pl-20 pr-40 border-b-2 border-0 border-stone-400 py-3'>
                <div className='flex items-center justify-start gap-2 text-2xl text-stone-500'>
                    <FaBars />
                    Dashboard
                </div>
                <div>




                    <div className='relative'>
                        <button type="button" className="text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 outline-none" onMouseOver={() => setProfileMenu(!profileMenu)}>

                            <img src="/imgs/pic.png" alt="user" className='w-full rounded-full' />

                        </button>
                        <div className={`
                            flex flex-col items-center absolute top-[90%] left-0 bg-white 
                            ${profileMenu ? "" : "hidden"}
                            `}>

                            <div className='w-[200px] border-1 border-stone-300 rounded-md p-2'>
                                <div className='border-0 border-b-1 p-2'>
                                    <Link to='/profile' className='flex items-center gap-1'>
                                        <FaRegUserCircle />
                                        Profile
                                    </Link>
                                </div>
                                <div className='border-0 border-b-1 p-2'>
                                    <Link to='/company-profile' className='flex items-center gap-1'>
                                        <FaAddressCard />
                                        Company Profile
                                    </Link>
                                </div>
                                <div className='border-0 border-b-1 p-2'>
                                    <Link to='/' className='flex items-center gap-1'>
                                        <IoLogOutOutline />
                                        Logout
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

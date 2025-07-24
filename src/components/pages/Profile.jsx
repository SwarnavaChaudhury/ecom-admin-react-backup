import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone';

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
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";








export default function Profile() {


    const [profile_sctn, setProfile] = useState(true)
    const [pass_sctn, setPassword] = useState(false)

    function change_state(str) {
        if (str == "profile") {
            setProfile(true)
            setPassword(false)
        } else if (str == "password") {
            setProfile(false)
            setPassword(true)
        }
    }







    const [selectedFile, setSelectedFile] = useState(null); // 🟢 state for file

    const onDrop = useCallback((acceptedFiles) => {
        // console.log(acceptedFiles);
        setSelectedFile(acceptedFiles[0]); // get the first file only
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const removeFile = () => {
        setSelectedFile(null);
    };






    return (
        <>

            <div className='w-full flex items-center justify-start gap-2 text-stone-700 border-0 border-b-2 border-stone-400 py-2 mb-5 text-xl'>

                <Link to='/home' className='flex items-center justify-start gap-1'>
                    <MdHomeFilled className='text-blue-500' />
                    Home
                </Link>
                /
                <span className='flex items-center justify-start gap-1'>
                    <CgProfile className='text-blue-500' />
                    Profile
                </span>
            </div>



            <div className='grid grid-cols-[25%_auto]'>
                <div>


                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-end px-4 pt-4">
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/imgs/pic.png" alt="Bonnie image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Swarnava Chaudhury
                            </h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">
                                Admin
                            </span>

                        </div>
                        <div class="mt-4 md:mt-6 bg-stone-200 py-10 pl-10">
                            <h3 className='font-bold text-[20px] mb-2'>
                                Contact Information
                            </h3>
                            <p className='flex items-center gap-2'>
                                <FaMobileAlt />
                                8952599999
                            </p>
                            <p className='flex items-center gap-2'>
                                <MdOutlineMailOutline />
                                xyz@gmail.com
                            </p>
                        </div>
                    </div>


                </div>
                <div className=''>

                    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">



                        <div className='border-b-1 border-stone-400 text-[20px] flex items-center justify-start pt-5'>
                            <div className={`
                                            px-5 pb-2 cursor-pointer  
                                            ${profile_sctn ? "font-medium border-b-5 border-b-violet-600 text-violet-600" : ""}
                                        `}
                                onClick={() => change_state("profile")}>
                                Edit Profile
                            </div>
                            <div className={`
                                            px-5 pb-2 cursor-pointer
                                            ${pass_sctn ? "font-medium border-b-5 border-b-violet-600 text-violet-600" : ""}
                                        `}
                                onClick={() => change_state("password")}>
                                Change Password
                            </div>
                        </div>



                        <div className={`
                                            grid grid-cols-[30%_auto] gap-5 p-10
                                            ${profile_sctn ? "" : "hidden"}
                                        `}>
                            <div>
                                <label className="block mb-2 font-bold">Parent Category Image</label>
                                <div>
                                    <div
                                        {...getRootProps()}
                                        className={`p-10 text-center border-2 border-dashed ${isDragActive ? 'bg-blue-50' : 'bg-gray-50'
                                            } cursor-pointer hover:bg-blue-400 duration-500`}
                                    >
                                        <input {...getInputProps()} />
                                        {isDragActive
                                            ? <p>Drop the image here …</p>
                                            : <p>Drag & drop an image, or click to select</p>}
                                    </div>
                                </div>
                                {selectedFile && (
                                    <div className="mt-3 flex items-center gap-3">
                                        <div>
                                            <p className="text-sm text-gray-700">
                                                <strong>{selectedFile.name}</strong>
                                            </p>
                                            <img
                                                src={URL.createObjectURL(selectedFile)}
                                                alt="Preview"
                                                className="mt-2 max-w-[200px] rounded max-h-[200px]"
                                            />
                                        </div>
                                        <button
                                            onClick={removeFile}
                                            className="text-red-600 hover:text-red-800 text-lg cursor-pointer"
                                            title="Remove selected file"
                                        >

                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>
                                )}

                            </div>
                            <div>
                                <label htmlFor="admin_name" className='block my-2 font-bold'>
                                    Name
                                </label>
                                <input type="text" id='admin_name' placeholder='Enter Admin Name...' className='w-full rounded-md border-1 border-stone-400' />

                                <label htmlFor="admin_email" className='block my-2 font-bold'>
                                    Email ID
                                </label>
                                <input type="text" id='admin_email' placeholder='Enter Email ID...' className='w-full rounded-md border-1 border-stone-400' />

                                <label htmlFor="admin_phno" className='block my-2 font-bold'>
                                    Phone Number
                                </label>
                                <input type="text" id='admin_phno' placeholder='Enter Phone Number...' className='w-full rounded-md border-1 border-stone-400' />

                                <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                                    Update Profile
                                </button>
                            </div>
                        </div>

                        <div className={`
                                            p-10 
                                            ${pass_sctn ? "" : "hidden"}
                                        `}>
                            <form action="" method="post">
                                <label htmlFor="current_pass" className='block my-2 font-bold'>
                                    Current Password
                                </label>
                                <input type="text" id='current_pass' placeholder='Enter Current Password...' className='w-full rounded-md border-1 border-stone-400' />

                                <label htmlFor="new_pass" className='block my-2 font-bold'>
                                    New Password
                                </label>
                                <input type="text" id='new_pass' placeholder='Enter New Password...' className='w-full rounded-md border-1 border-stone-400' />

                                <label htmlFor="conf_pass" className='block my-2 font-bold'>
                                    Confirm Password
                                </label>
                                <input type="text" id='conf_pass' placeholder='Enter Confirm Password...' className='w-full rounded-md border-1 border-stone-400' />

                                <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                                    Change Password
                                </button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
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
import { FaStoreAlt } from "react-icons/fa";






export default function CompanyProfile() {





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
                    <FaStoreAlt className='text-blue-500' />

                    Company Profile
                </span>
            </div>


            <div className='max-w-[80vw] mx-auto gap-3 mb-50 mt-10 p-10 shadow-lg border-1 rounded-md border-stone-300'>

                <div className='grid grid-cols-[30%_auto] gap-5'>
                    <div>
                        <label className="block mb-2 font-bold">Choose Image</label>
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
                        <label htmlFor="company_name" className='block my-2 font-bold'>
                            Company Name
                        </label>
                        <input type="text" id='company_name' placeholder='Company Name...' className='w-full rounded-md border-1 border-stone-400' />

                        <label htmlFor="company_email" className='block my-2 font-bold'>
                            Email ID
                        </label>
                        <input type="text" id='company_email' placeholder='Enter Email ID...' className='w-full rounded-md border-1 border-stone-400' />

                        <label htmlFor="company_phone" className='block my-2 font-bold'>
                            Mobile Number
                        </label>
                        <input type="text" id='company_phone' placeholder='Enter Mobile Number...' className='w-full rounded-md border-1 border-stone-400' />

                    </div>
                </div>
                <div>

                    <label htmlFor="company_address" className='block my-2 font-bold'>
                        Address
                    </label>
                    <textarea name="company_address" id="company_address" placeholder='Enter Company Address...' className='w-full rounded-md border-1 border-stone-400' rows={6}></textarea>

                    <label htmlFor="g_map_url" className='block my-2 font-bold'>
                        Google Map URL
                    </label>
                    <input type="text" id='g_map_url' placeholder='Enter Google Map URL...' className='w-full rounded-md border-1 border-stone-400' />

                    <div className='mt-5 p-3 border border-stone-400 rounded-md'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57242.0081345318!2d73.030606!3d26.273815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1746824887086!5m2!1sen!2sin" width="100%" height="200" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                        Add Parent Category
                    </button>

                </div>

            </div>


        </>
    )
}
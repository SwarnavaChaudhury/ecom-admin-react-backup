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
import { FaUserEdit } from "react-icons/fa";
import Breadcrumb from '../common/Breadcrumb';








export default function TestimonialAdd() {



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


            <Breadcrumb fst_para={<><FaUserEdit className='text-blue-500' /> Testimonials</>} fst_path="/testimonial/view" snd_para="Add" />



            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        Add Testimonial
                    </h1>
                </div>
                <div className='m-5'>

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
                            <label htmlFor="testimonial_name" className='block my-2 font-bold'>
                                Testimonial Name
                            </label>
                            <input type="text" id='testimonial_name' placeholder='Enter Testimonial Name...' className='w-full rounded-md border-1 border-stone-400' />

                            <label htmlFor="testimonial_designation" className='block my-2 font-bold'>
                                Designation
                            </label>
                            <input type="text" id='testimonial_designation' placeholder='Enter Designation...' className='w-full rounded-md border-1 border-stone-400' />

                            <label htmlFor="testimonial_rating" className='block my-2 font-bold'>
                                Rating
                            </label>
                            <input type="text" id='testimonial_rating' placeholder='Enter Rating...' className='w-full rounded-md border-1 border-stone-400' />

                            <label htmlFor="testimonial_order" className='block my-2 font-bold'>
                                Order
                            </label>
                            <input type="text" id='testimonial_order' placeholder='Enter Testimonial Order...' className='w-full rounded-md border-1 border-stone-400' />

                            <label htmlFor="testimonial_msg" className='block my-2 font-bold'>
                                Message
                            </label>
                            <textarea name="testimonial_msg" id="testimonial_msg" rows={6} className='w-full rounded-md border-1 border-stone-400' ></textarea>
                        </div>
                    </div>


                    <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                        Add Testimonial
                    </button>


                </div>

            </div>


        </>
    )
}
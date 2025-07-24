import React, { useState, useCallback, useRef } from 'react'
import { useDropzone } from 'react-dropzone';
import JoditEditor from 'jodit-react';
// import { RiDeleteBin6Line } from 'react-icons/ri';

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
import { FaBagShopping } from "react-icons/fa6";
import Breadcrumb from '../common/Breadcrumb';







export default function ProductAdd() {




    // jodit react
    const shortDescRef = useRef(null);
    const longDescRef = useRef(null);

    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');

    const config = {
        readonly: false,
        toolbarSticky: true,
        height: 500,
        uploader: {
            insertImageAsBase64URI: true
        }
    };











    // State for each dropzone
    const [productImage, setProductImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [gallery, setGallery] = useState([]);

    // Single-file dropzones
    const onDropProduct = useCallback(files => setProductImage(files[0]), []);
    const onDropBack = useCallback(files => setBackImage(files[0]), []);

    // Multi-file dropzone for gallery
    const onDropGallery = useCallback(
        files => setGallery(current => [...current, ...files]),
        []
    );

    // Create separate hooks
    const {
        getRootProps: getProdProps,
        getInputProps: getProdInput,
        isDragActive: prodActive
    } = useDropzone({ onDrop: onDropProduct, accept: { 'image/*': [] } });

    const {
        getRootProps: getBackProps,
        getInputProps: getBackInput,
        isDragActive: backActive
    } = useDropzone({ onDrop: onDropBack, accept: { 'image/*': [] } });

    const {
        getRootProps: getGalProps,
        getInputProps: getGalInput,
        isDragActive: galActive
    } = useDropzone({ onDrop: onDropGallery, accept: { 'image/*': [] } });

    // Remove handlers
    const removeProduct = () => setProductImage(null);
    const removeBack = () => setBackImage(null);
    const removeGallery = idx =>
        setGallery(current => current.filter((_, i) => i !== idx));



    return (
        <>



            <Breadcrumb fst_para={<><FaBagShopping className='text-blue-500' /> Products</>} fst_path="/product/view" snd_para="Add" />



            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1 p-5'>
                <form action="" method="post">
                    <div className='grid grid-cols-[33%_auto] gap-5'>
                        <div>

                            {/* ************************************************************** */}
                            {/* ************************************************************** */}
                            {/* ************************************************************** */}


                            {/* ===== Product Image ===== */}
                            <section>
                                <label className="block mb-2 font-bold">Product Image</label>
                                <div
                                    {...getProdProps()}
                                    className={`p-8 text-center border-2 border-dashed rounded cursor-pointer hover:bg-blue-400 duration-500 ${prodActive ? 'bg-blue-50' : 'bg-gray-50'
                                        }`}
                                >
                                    <input {...getProdInput()} />
                                    {prodActive
                                        ? 'Drop product image here…'
                                        : 'Drag & drop, or click to select'}
                                </div>
                                {productImage && (
                                    <div className="mt-3 flex items-center gap-4">
                                        <img
                                            src={URL.createObjectURL(productImage)}
                                            alt="Product preview"
                                            className="h-24 rounded"
                                        />
                                        <div className="flex-1">
                                            <p className="font-medium">{productImage.name}</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={removeProduct}
                                            className="text-red-600 hover:text-red-800"
                                            title="Remove"
                                        >
                                            <RiDeleteBin6Line size={20} className='cursor-pointer' />
                                        </button>
                                    </div>
                                )}
                            </section>

                            {/* ===== Back Image ===== */}
                            <section>
                                <label className="block mb-2 font-bold">Back Image</label>
                                <div
                                    {...getBackProps()}
                                    className={`p-8 text-center border-2 border-dashed rounded cursor-pointer hover:bg-blue-400 duration-500 ${backActive ? 'bg-blue-50' : 'bg-gray-50'
                                        }`}
                                >
                                    <input {...getBackInput()} />
                                    {backActive
                                        ? 'Drop back image here…'
                                        : 'Drag & drop, or click to select'}
                                </div>
                                {backImage && (
                                    <div className="mt-3 flex items-center gap-4">
                                        <img
                                            src={URL.createObjectURL(backImage)}
                                            alt="Back preview"
                                            className="h-24 rounded"
                                        />
                                        <div className="flex-1">
                                            <p className="font-medium">{backImage.name}</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={removeBack}
                                            className="text-red-600 hover:text-red-800"
                                            title="Remove"
                                        >
                                            <RiDeleteBin6Line size={20} className='cursor-pointer' />
                                        </button>
                                    </div>
                                )}
                            </section>

                            {/* ===== Gallery Images ===== */}
                            <section>
                                <label className="block mb-2 font-bold">Gallery Images</label>
                                <div
                                    {...getGalProps()}
                                    className={`p-8 text-center border-2 border-dashed rounded cursor-pointer hover:bg-blue-400 duration-500 ${galActive ? 'bg-blue-50' : 'bg-gray-50'
                                        }`}
                                >
                                    <input {...getGalInput()} multiple />
                                    {galActive
                                        ? 'Drop gallery images here…'
                                        : 'Drag & drop, or click to select (multiple)'}
                                </div>
                                {gallery.length > 0 && (
                                    <div className="mt-3 grid grid-cols-3 gap-4">
                                        {gallery.map((file, idx) => (
                                            <div key={idx} className="relative">
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={`Gallery ${idx}`}
                                                    className="h-24 w-full object-cover rounded"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeGallery(idx)}
                                                    className="absolute top-1 right-1 text-white bg-black bg-opacity-50 p-1 rounded-full"
                                                    title="Remove"
                                                >
                                                    <RiDeleteBin6Line size={16} className='cursor-pointer' />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>



                            {/* ************************************************************** */}
                            {/* ************************************************************** */}
                            {/* ************************************************************** */}

                        </div>
                        <div className='grid grid-cols-2 gap-5'>

                            <div>
                                <label htmlFor="prodt_name" className='block my-2 font-bold'>
                                    Prodct Name
                                </label>
                                <input type="text" id='prodt_name' placeholder='Enter Prodct Name...' className='w-full rounded-md border-1 border-stone-400' />
                            </div>
                            <div>
                                <label htmlFor="parent_category" className='block my-2 font-bold'>
                                    Select Parent Category
                                </label>
                                <select name="parent_category" id="parent_category" className='w-full rounded-md border-1 border-stone-400'>
                                    <option value=""> Nothing Selected </option>
                                    <option value=""> Mobile Phones </option>
                                    <option value=""> Laptops </option>
                                    <option value=""> Men's Wear </option>
                                    <option value=""> Women's Wear </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="sub_category" className='block my-2 font-bold'>
                                    Select Sub-Category
                                </label>
                                <select name="sub_category" id="sub_category" className='w-full rounded-md border-1 border-stone-400'>
                                    <option value=""> Nothing Selected </option>
                                    <option value=""> Mobile Phones </option>
                                    <option value=""> Laptops </option>
                                    <option value=""> Men's Wear </option>
                                    <option value=""> Women's Wear </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="sub_sub_category" className='block my-2 font-bold'>
                                    Select Sub Sub-Category
                                </label>
                                <select name="sub_sub_category" id="sub_sub_category" className='w-full rounded-md border-1 border-stone-400'>
                                    <option value=""> Nothing Selected </option>
                                    <option value=""> Mobile Phones </option>
                                    <option value=""> Laptops </option>
                                    <option value=""> Men's Wear </option>
                                    <option value=""> Women's Wear </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="materials" className='block my-2 font-bold'>
                                    Select Materials
                                </label>
                                <select name="materials" id="materials" className='w-full rounded-md border-1 border-stone-400'>
                                    <option value=""> Nothing Selected </option>
                                    <option value=""> Neem </option>
                                    <option value=""> Babbul </option>
                                    <option value=""> Neem </option>
                                    <option value=""> Babbul </option>
                                    <option value=""> Neem </option>
                                    <option value=""> Babbul </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="slct_color" className='block my-2 font-bold'>
                                    Select Color
                                </label>
                                <select name="slct_color" id="slct_color" className='w-full rounded-md border-1 border-stone-400'>
                                    <option value=""> Nothing Selected </option>
                                    <option value=""> Red </option>
                                    <option value=""> Green </option>
                                    <option value=""> Blue </option>
                                    <option value=""> Gray </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="product_type" className='block my-2 font-bold'>
                                    Select Product Type
                                </label>
                                <select name="product_type" id="product_type" className='w-full rounded-md border-1 border-stone-400'>
                                    <option value=""> Nothing Selected </option>
                                    <option value=""> Featured </option>
                                    <option value=""> New Arrivals </option>
                                    <option value=""> On Sale </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="is_best_selling" className='block my-2 font-bold'>
                                    Is Best Selling
                                </label>
                                <select name="is_best_selling" id="is_best_selling" className='w-full rounded-md border-1 border-stone-400'>
                                    <option value=""> Nothing Selected </option>
                                    <option value=""> Yes </option>
                                    <option value=""> No </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="is_top_rated" className='block my-2 font-bold'>
                                    Is Top Rated
                                </label>
                                <select name="is_top_rated" id="is_top_rated" className='w-full rounded-md border-1 border-stone-400'>
                                    <option value=""> Nothing Selected </option>
                                    <option value=""> Yes </option>
                                    <option value=""> No </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="is_upsell" className='block my-2 font-bold'>
                                    Is Up Sell
                                </label>
                                <select name="is_upsell" id="is_upsell" className='w-full rounded-md border-1 border-stone-400'>
                                    <option value=""> Nothing Selected </option>
                                    <option value=""> Yes </option>
                                    <option value=""> No </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="actual_price" className='block my-2 font-bold'>
                                    Actual Price
                                </label>
                                <input type="text" id='actual_price' placeholder='Enter Actual Price...' className='w-full rounded-md border-1 border-stone-400' />
                            </div>
                            <div>
                                <label htmlFor="sale_price" className='block my-2 font-bold'>
                                    Sale Price
                                </label>
                                <input type="text" id='sale_price' placeholder='Enter Sale Price...' className='w-full rounded-md border-1 border-stone-400' />
                            </div>
                            <div>
                                <label htmlFor="total_stocks" className='block my-2 font-bold'>
                                    Total in Stocks
                                </label>
                                <input type="text" id='total_stocks' placeholder='Enter Total in Stocks...' className='w-full rounded-md border-1 border-stone-400' />
                            </div>
                            <div>
                                <label htmlFor="prodt_order" className='block my-2 font-bold'>
                                    Order
                                </label>
                                <input type="text" id='prodt_order' placeholder='Enter Order...' className='w-full rounded-md border-1 border-stone-400' />
                            </div>

                        </div>
                    </div>
                    <div>
                        <label htmlFor="prodt_descp" className='block my-2 font-bold'>
                            Description
                        </label>
                        {/* <textarea name="prodt_descp" id="prodt_descp" rows={10} className='w-full rounded-md border-1 border-stone-400'></textarea> */}
                        <div className="space-y-8">
                            {/* Short Description */}
                            <div>
                                <label className="block mb-2 text-lg font-semibold">Short Description</label>
                                <JoditEditor
                                    ref={shortDescRef}
                                    value={shortDescription}
                                    config={config}
                                    onChange={newContent => setShortDescription(newContent)}
                                />
                            </div>

                            {/* Long Description */}
                            <div>
                                <label className="block mb-2 text-lg font-semibold">Long Description</label>
                                <JoditEditor
                                    ref={longDescRef}
                                    value={longDescription}
                                    config={config}
                                    onChange={newContent => setLongDescription(newContent)}
                                />
                            </div>
                        </div>
                        {/* <p className="mt-5 text-sm text-gray-500">Preview: {content}</p> */}

                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-3 text-center mt-5">
                            Create Product
                        </button>

                    </div>
                </form>
            </div>



        </>
    )
}
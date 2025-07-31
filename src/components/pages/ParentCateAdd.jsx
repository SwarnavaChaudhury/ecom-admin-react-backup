import React, { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone';

import { Link, useNavigate, useParams } from 'react-router'
import { FaBarsStaggered } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Breadcrumb from '../common/Breadcrumb';
import axios from 'axios';
import { collapseToast, toast } from 'react-toastify';




export default function ParentCateAdd() {

    let [imagePath, setImagePath] = useState('');

    const [selectedFile, setSelectedFile] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        // console.log(acceptedFiles);
        setSelectedFile(acceptedFiles[0]); // get the first file only
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const removeFile = () => {
        setSelectedFile(null);
    };







    let [categoryDetails, setCategoryDetails] = useState('')

    const params = useParams();
    const updateIdState = params.id;

    const navigate = useNavigate();

    useEffect(() => {

        if (updateIdState) {

            axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_CATEGORY_DETAILS, {
                id: updateIdState
            })
                .then((response) => {
                    if (response.data._status == true) {
                        // console.log(response.data)
                        setCategoryDetails(response.data._data);
                        setImagePath(response.data._image_path + response.data._data.image);
                    } else {
                        setCategoryDetails('');
                    }
                })
                .catch((error) => {
                    toast.error('Something went wrong!!');
                })
        }

    }, [updateIdState])

    // console.log(categoryDetails);







    let handleForm = (event) => {

        event.preventDefault();

        let data = event.target;

        if (updateIdState) {
            // update old data

            // axios.put(`http://localhost:8000/api/admin/material/update/${updateIdState}`, data)
            let url = import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_CATEGORY_UPDATE + `/${updateIdState}`;
            axios.put(url, data)
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/category/view');
                    } else {
                        toast.error(success.data._message);
                    }
                })
                .catch((error) => {
                    toast.error(error.data._message);
                })

        } else {
            // insert new data

            let url = import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_CATEGORY_CREATE;

            axios.post(url, data)
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/category/view');
                    } else {
                        toast.error(success.data._message);
                    }
                })
                .catch((error) => {
                    toast.error(error.data._message);
                })

        }

    }







    return (
        <>


            {
                updateIdState
                    ?
                    <Breadcrumb fst_para={<><FaBarsStaggered className='text-blue-500' /> Category</>} fst_path="/category/view" snd_para="Update" />
                    :
                    <Breadcrumb fst_para={<><FaBarsStaggered className='text-blue-500' /> Category</>} fst_path="/category/view" snd_para="Add" />
            }


            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        {
                            updateIdState ? 'Update Parent Category' : 'Add Parent Category'
                        }
                    </h1>
                </div>
                <div className='m-5'>

                    <form onSubmit={handleForm}>

                        <div className='grid grid-cols-[30%_auto] gap-5'>
                            <div>
                                <label className="block mb-2 font-bold">Parent Category Image</label>
                                <div>
                                    <div
                                        {...getRootProps()}
                                        className={`p-10 text-center border-2 border-dashed ${isDragActive ? 'bg-blue-50' : 'bg-gray-50'
                                            } cursor-pointer hover:bg-blue-400 duration-500`}
                                    >
                                        <input {...getInputProps()} accept='.jpg,.png,.jpeg' name='image' />
                                        {isDragActive
                                            ? <p>Drop the image here …</p>
                                            : <p>Drag & drop an image, or click to select</p>}
                                    </div>
                                </div>
                                {/* {selectedFile && (
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
                                )} */}


                                {selectedFile ? (
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
                                ) : (
                                    // Show old image if editing and no new image is selected
                                    categoryDetails.image && (
                                        <div className="mt-3 flex items-center gap-3">
                                            <div>
                                                <p className="text-sm text-gray-700">
                                                    <strong>{categoryDetails.image}</strong>
                                                </p>
                                                <img
                                                    src={imagePath}
                                                    alt="Existing Category"
                                                    className="mt-2 max-w-[200px] rounded max-h-[200px]"
                                                />
                                            </div>
                                        </div>
                                    )
                                )}




                            </div>
                            <div>
                                <label htmlFor="parent_cate_name" className='block my-2 font-bold'>
                                    Parent Category Name
                                </label>
                                <input type="text" id='parent_cate_name' name='name' placeholder='Category Name...' className='w-full rounded-md border-1 border-stone-400' defaultValue={categoryDetails.name} />

                                <label htmlFor="parent_cate_order" className='block my-2 font-bold'>
                                    Parent Category Order
                                </label>
                                <input type="text" id='parent_cate_order' name='order' placeholder='Enter Category Order...' className='w-full rounded-md border-1 border-stone-400' defaultValue={categoryDetails.order} />
                            </div>
                        </div>


                        <button type='submit' className={`text-white py-2 px-5 mt-5 rounded-lg cursor-pointer ${updateIdState ? "bg-violet-700" : "bg-green-600"} `}>
                            {
                                updateIdState ? 'Update Parent Category' : 'Add Parent Category'
                            }
                        </button>

                    </form>

                </div>

            </div>



        </>
    )
}
import React, { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone';

import { FaBarsStaggered } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Breadcrumb from '../common/Breadcrumb';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router';







export default function SubSubCateAdd() {



    let [searchfilter, setSearchfilter] = useState(true);

    let [categories, setCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);
    let [subSubCategoryDetails, setSubSubCategoryDetails] = useState('')

    let [searchStr, setSearchStr] = useState('');
    let [parentCateId, setParentCateID] = useState('');
    let [subCateId, setSubCateID] = useState('');

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










    useEffect(() => {

        axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_CATEGORY_VIEW, {
            page: 1,
            limit: 100,
        })
            .then((response) => {
                if (response.data._status == true) {
                    // console.log(response.data);
                    setCategories(response.data._data);
                } else {
                    setCategories([]);
                }
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })

    }, []);



    useEffect(() => {

        if (parentCateId != "") {

            axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_SUB_CATEGORY_VIEW, {
                page: 1,
                limit: 100,
                parent_category_id: parentCateId,
            })
                .then((response) => {
                    if (response.data._status == true) {
                        // console.log(response.data);
                        setSubCategories(response.data._data);
                    } else {
                        setSubCategories([]);
                    }
                })
                .catch((error) => {
                    toast.error('Something went wrong');
                })

        } else {

            setSubCategories([]);

        }

    }, [parentCateId]);






    const params = useParams();
    const updateIdState = params.id;

    const navigate = useNavigate();

    useEffect(() => {

        if (updateIdState) {

            axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_SUB_SUB_CATEGORY_DETAILS, {
                id: updateIdState
            })
                .then((response) => {
                    if (response.data._status == true) {
                        // console.log(response.data)
                        setSubSubCategoryDetails(response.data._data);
                        setImagePath(response.data._image_path + response.data._data.image);
                        setParentCateID(response.data._data.parent_category_id);
                        setSubCateID(response.data._data.child_category_id);
                    } else {
                        setSubSubCategoryDetails('');
                    }
                })
                .catch((error) => {
                    // console.log(error)
                    toast.error('Something went wrong!!');
                })
        }

    }, [updateIdState])



















    let handleForm = (event) => {

        event.preventDefault();

        let data = event.target;

        if (updateIdState) {

            // update old data
            let url = import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_SUB_SUB_CATEGORY_UPDATE + `/${updateIdState}`;
            axios.put(url, data)
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/category/sub-sub-category/view');
                    } else {
                        toast.error(success.data._message);
                    }
                })
                .catch((error) => {
                    toast.error(error.data._message);
                })

        } else {

            // insert new data
            let url = import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_SUB_SUB_CATEGORY_CREATE;

            axios.post(url, data)
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/category/sub-sub-category/view');
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
                    <Breadcrumb fst_para={<><FaBarsStaggered className='text-blue-500' /> Sub-Category</>} fst_path="/category/sub-sub-category/view" snd_para="Update Sub Sub-Category" />
                    :
                    <Breadcrumb fst_para={<><FaBarsStaggered className='text-blue-500' /> Sub-Category</>} fst_path="/category/sub-sub-category/view" snd_para="Add Sub Sub-Category" />
            }


            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        {
                            updateIdState ? 'Update Sub Sub-Category' : 'Add Sub Sub-Category'
                        }
                    </h1>
                </div>
                <div className='m-5'>

                    <form onSubmit={handleForm}>


                        <div className='grid grid-cols-[30%_auto] gap-5'>
                            <div>
                                <label className="block mb-2 font-bold">Sub Sub-Category Image</label>
                                <div>
                                    <div
                                        {...getRootProps()}
                                        className={`p-10 text-center border-2 border-dashed ${isDragActive ? 'bg-blue-50' : 'bg-gray-50'
                                            } cursor-pointer hover:bg-blue-400 duration-500`}
                                    >
                                        <input {...getInputProps()} name='image' accept='.jpg,.png,.jpeg' />
                                        {isDragActive
                                            ? <p>Drop the image here …</p>
                                            : <p>Drag & drop an image, or click to select</p>}
                                    </div>
                                </div>
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
                                    subSubCategoryDetails.image && (
                                        <div className="mt-3 flex items-center gap-3">
                                            <div>
                                                <p className="text-sm text-gray-700">
                                                    <strong>{subSubCategoryDetails.image}</strong>
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
                                <label htmlFor="parent_category_id" className='block my-2 font-bold'>
                                    Parent Category Name
                                </label>
                                <select
                                    value={parentCateId}
                                    onChange={(e) => setParentCateID(e.target.value)}
                                    className='w-full rounded-md border-1 border-stone-400'
                                    name='parent_category_id'
                                    id='parent_category_id'
                                >
                                    <option value="">--- Select Parent Category ---</option>
                                    {categories.map((item, index) => (
                                        <option value={item._id} key={index}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>

                                <label htmlFor="child_category_id" className='block my-2 font-bold'>
                                    Sub-Category Name
                                </label>

                                <select
                                    value={subCateId} onChange={(e) => setSubCateID(e.target.value)}
                                    name="child_category_id" id="child_category_id"
                                    className='w-full rounded-md border-1 border-stone-400'>

                                    <option value="">--- Select Sub-Category ---</option>
                                    {subCategories.map((sitem, sindex) => (
                                        <option value={sitem._id} key={sindex}>
                                            {sitem.name}
                                        </option>
                                    ))}

                                </select>

                                <label htmlFor="sub_sub_cate_name" className='block my-2 font-bold'>
                                    Sub Sub-Category Name
                                </label>
                                <input type="text" id='sub_sub_cate_name' name='name' placeholder='Enter Sub Sub-Category Name...' className='w-full rounded-md border-1 border-stone-400' defaultValue={subSubCategoryDetails.name} />

                                <label htmlFor="sub_sub_cate_order" className='block my-2 font-bold'>
                                    Sub Sub-Category Order
                                </label>
                                <input type="text" id='sub_sub_cate_order' name='order' placeholder='Enter Sub Sub-Category Order...' className='w-full rounded-md border-1 border-stone-400' defaultValue={subSubCategoryDetails.order} />
                            </div>
                        </div>


                        <button type='submit' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                            Add Sub Sub-Category
                        </button>

                    </form>

                </div>

            </div>


        </>
    )
}
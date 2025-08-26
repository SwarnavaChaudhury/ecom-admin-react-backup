import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import JoditEditor from 'jodit-react';
// import { RiDeleteBin6Line } from 'react-icons/ri';

import { Link, useNavigate, useParams } from 'react-router'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import Breadcrumb from '../common/Breadcrumb';
import axios from 'axios';
import { toast } from 'react-toastify';







export default function ProductAdd() {





    let [categories, setCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);
    let [subSubCategories, setSubSubCategories] = useState([]);
    let [productDetails, setProductDetails] = useState([]);
    let [colors, setColors] = useState([]);
    let [materials, setMaterials] = useState([]);

    let [parentCateId, setParentCateID] = useState('');
    let [subCateId, setSubCateID] = useState('');
    let [subSubCateId, setSubSubCateId] = useState('');
    let [colorId, setColorId] = useState('');
    let [materialId, setMaterialId] = useState('');

    let [imagePath, setImagePath] = useState('');
    let [frontImg, setFrontImg] = useState('');
    let [backImg, setBackImg] = useState('');
    let [galleryImg, setGalleryImg] = useState([]);



    // jodit react
    const shortDescRef = useRef(null);
    const longDescRef = useRef(null);

    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');











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




    useEffect(() => {

        if (subCateId != "") {

            axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_SUB_SUB_CATEGORY_VIEW, {
                page: 1,
                limit: 100,
                parent_category_id: parentCateId,
                child_category_id: subCateId,
            })
                .then((response) => {
                    if (response.data._status == true) {
                        // console.log(response.data);
                        setSubSubCategories(response.data._data);
                    } else {
                        setSubSubCategories([]);
                    }
                })
                .catch((error) => {
                    toast.error('Something went wrong');
                })

        }
        else {
            setSubSubCategories([]);
        }

    }, [subCateId]);




    useEffect(() => {
        axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_COLOR_VIEW, {
            page: 1,
            limit: 100,
        })
            .then((response) => {
                if (response.data._status == true) {
                    // console.log(response.data);
                    setColors(response.data._data);
                } else {
                    setColors([]);
                }
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })
    }, []);




    useEffect(() => {

        axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_MATERIAL_VIEW, {
            page: 1,
            limit: 100,
        })
            .then((response) => {
                if (response.data._status == true) {
                    // console.log(response.data);
                    setMaterials(response.data._data);
                } else {
                    setMaterials([]);
                }
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })

    }, [])


























    const params = useParams();
    const updateIdState = params.id;

    const navigate = useNavigate();

    useEffect(() => {

        if (updateIdState) {

            axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_PRODUCT_DETAILS_IDS, {
                id: updateIdState
            })
                .then((response) => {
                    if (response.data._status == true) {
                        // console.log(response.data);

                        setProductDetails(response.data._data);

                        setImagePath(response.data._image_path);
                        setFrontImg(response.data._data.front_image);
                        setBackImg(response.data._data.back_image);
                        setGalleryImg(response.data._data.image_gallery); // array

                        setParentCateID(response.data._data.parent_category_ids[0]);
                        setSubCateID(response.data._data.sub_category_ids[0]);
                        setSubSubCateId(response.data._data.sub_sub_category_ids[0]);
                        setColorId(response.data._data.color_ids[0]);
                        setMaterialId(response.data._data.material_ids[0]);
                        setShortDescription(response.data._data.short_description);
                        setLongDescription(response.data._data.long_description);

                    } else {
                        setProductDetails('');
                    }
                })
                .catch((error) => {
                    console.log(error)
                    toast.error('Something went wrong!!');
                })
        }

    }, [updateIdState])




    // console.log(productDetails);















    let handleForm = (event) => {

        event.preventDefault();

        let data = new FormData(event.target);

        // add rich text editor values
        data.append("short_description", shortDescription);
        data.append("long_description", longDescription);


        // append Dropzone files
        if (productImage) {
            data.append("front_image", productImage); // matches multer config
        }
        if (backImage) {
            data.append("back_image", backImage); // matches multer config
        }
        if (gallery.length > 0) {
            gallery.forEach((file) => {
                data.append("image_gallery", file); // ✅ no [] here
            });
        }

        // which old images user wants to keep
        data.append("old_gallery_img", galleryImg);


        if (updateIdState) {

            // update old data
            let url = import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_PRODUCT_UPDATE + `/${updateIdState}`;
            axios.put(url, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/product/view');
                    } else {
                        toast.error(success.data._message);
                    }
                })
                .catch((error) => {
                    toast.error(error.data._message);
                })

        } else {

            // insert new data
            let url = import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_PRODUCT_CREATE;

            axios.post(url, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/product/view');
                    } else {
                        toast.error(success.data._message);
                    }
                })
                .catch((error) => {
                    toast.error(error.data._message);
                })

        }

    }












    // console.log(frontImg);
    // console.log(backImg);
    // console.log(galleryImg);

    useEffect(() => {
        console.log(frontImg);
        console.log(backImg);
        console.log(galleryImg);
    }, [frontImg, backImg, galleryImg])

    // For deleting OLD images (already in DB)
    const removeOldGallery = (index) => {
        const updated = [...galleryImg];
        updated.splice(index, 1);
        setGalleryImg(updated);
    };

    // For deleting NEW images (just uploaded now)
    const removeNewGallery = (index) => {
        const updated = [...gallery];
        updated.splice(index, 1);
        setGallery(updated);
    };













    return (
        <>



            <Breadcrumb fst_para={<><FaBagShopping className='text-blue-500' /> Products</>} fst_path="/product/view" snd_para="Add" />



            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1 p-5'>
                <form onSubmit={handleForm}>
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
                                    {/* <input {...getProdInput()} name="front_image" /> */}
                                    <input {...getProdInput()} />
                                    {prodActive
                                        ? 'Drop product image here…'
                                        : 'Drag & drop, or click to select'}
                                </div>
                                {
                                    productImage
                                        ?
                                        (
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
                                        )
                                        :
                                        (
                                            frontImg
                                                ?
                                                (
                                                    <div className="mt-3 flex items-center gap-4">
                                                        <img
                                                            src={imagePath + frontImg}
                                                            alt="Product preview"
                                                            className="h-24 rounded"
                                                        />
                                                        <div className="flex-1">
                                                            <p className="font-medium">{frontImg}</p>
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
                                                )
                                                :
                                                ""
                                        )
                                }
                            </section>

                            {/* ===== Back Image ===== */}
                            <section>
                                <label className="block mb-2 font-bold">Back Image</label>
                                <div
                                    {...getBackProps()}
                                    className={`p-8 text-center border-2 border-dashed rounded cursor-pointer hover:bg-blue-400 duration-500 ${backActive ? 'bg-blue-50' : 'bg-gray-50'
                                        }`}
                                >
                                    {/* <input {...getBackInput()} name="back_image" /> */}
                                    <input {...getBackInput()} />
                                    {backActive
                                        ? 'Drop back image here…'
                                        : 'Drag & drop, or click to select'}
                                </div>
                                {
                                    backImage
                                        ?
                                        (
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
                                        )
                                        :
                                        (
                                            backImg
                                                ?
                                                (
                                                    <div className="mt-3 flex items-center gap-4">
                                                        <img
                                                            src={imagePath + backImg}
                                                            alt="Back preview"
                                                            className="h-24 rounded"
                                                        />
                                                        <div className="flex-1">
                                                            <p className="font-medium">{backImg}</p>
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
                                                )
                                                :
                                                ""
                                        )
                                }
                            </section>

                            {/* ===== Gallery Images ===== */}
                            <section>
                                <label className="block mb-2 font-bold">Gallery Images</label>
                                <div
                                    {...getGalProps()}
                                    className={`p-8 text-center border-2 border-dashed rounded cursor-pointer hover:bg-blue-400 duration-500 ${galActive ? "bg-blue-50" : "bg-gray-50"
                                        }`}
                                >
                                    <input {...getGalInput()} multiple />
                                    {galActive
                                        ? "Drop gallery images here…"
                                        : "Drag & drop, or click to select (multiple)"}
                                </div>

                                {/* Show both old + new images */}
                                <div className="mt-3 grid grid-cols-3 gap-4">
                                    {/* Old Gallery Images */}
                                    {galleryImg.length > 0 &&
                                        galleryImg.map((g_item, g_index) => (
                                            <div key={`old-${g_index}`} className="relative">
                                                <img
                                                    src={imagePath + g_item}
                                                    alt={`Gallery old ${g_index}`}
                                                    className="h-24 w-full object-cover rounded"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeOldGallery(g_index)}
                                                    className="absolute top-1 right-1 text-white bg-black bg-opacity-50 p-1 rounded-full"
                                                    title="Remove"
                                                >
                                                    <RiDeleteBin6Line size={16} />
                                                </button>
                                            </div>
                                        ))}

                                    {/* New Uploaded Images */}
                                    {gallery.length > 0 &&
                                        gallery.map((file, idx) => (
                                            <div key={`new-${idx}`} className="relative">
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={`Gallery new ${idx}`}
                                                    className="h-24 w-full object-cover rounded"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeNewGallery(idx)}
                                                    className="absolute top-1 right-1 text-white bg-black bg-opacity-50 p-1 rounded-full"
                                                    title="Remove"
                                                >
                                                    <RiDeleteBin6Line size={16} />
                                                </button>
                                            </div>
                                        ))}
                                </div>
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
                                <input type="text" id='prodt_name' name='name' placeholder='Enter Prodct Name...' className='w-full rounded-md border-1 border-stone-400' defaultValue={productDetails.name} />
                            </div>
                            <div>
                                <label htmlFor="parent_category_ids" className='block my-2 font-bold'>
                                    Select Parent Category
                                </label>
                                <select name='parent_category_ids[]' id='parent_category_ids' value={parentCateId} onChange={(e) => setParentCateID(e.target.value)} className='w-full rounded-md border-1 border-stone-400'>
                                    <option value="">--- Select Parent Category ---</option>
                                    {categories.map((item, index) => (
                                        <option value={item._id} key={index}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="sub_category_ids" className='block my-2 font-bold'>
                                    Select Sub-Category
                                </label>
                                <select name="sub_category_ids[]" id="sub_category_ids"
                                    value={subCateId} onChange={(e) => setSubCateID(e.target.value)}
                                    className='w-full rounded-md border-1 border-stone-400'>
                                    <option value="">--- Select Sub-Category ---</option>
                                    {subCategories.map((sitem, sindex) => (
                                        <option value={sitem._id} key={sindex}>
                                            {sitem.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="sub_sub_category_ids" className='block my-2 font-bold'>
                                    Select Sub Sub-Category
                                </label>
                                <select name="sub_sub_category_ids[]" id="sub_sub_category_ids"
                                    value={subSubCateId} onChange={(e) => setSubSubCateId(e.target.value)}
                                    className='w-full rounded-md border-1 border-stone-400'>
                                    <option value="">--- Select Sub Sub-Category ---</option>
                                    {subSubCategories.map((s_sitem, s_sindex) => (
                                        <option value={s_sitem._id} key={s_sindex}>
                                            {s_sitem.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="material_ids" className='block my-2 font-bold'>
                                    Select Materials
                                </label>
                                <select name='material_ids[]' id="material_ids"
                                    value={materialId} onChange={(e) => setMaterialId(e.target.value)}
                                    className='h-[40px] w-full rounded-lg'>
                                    <option value="">--- Select Material ---</option>
                                    {materials.map((m_item, m_index) => (
                                        <option value={m_item._id} key={m_index}>
                                            {m_item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="color_ids" className='block my-2 font-bold'>
                                    Select Color
                                </label>
                                <select name='color_ids[]' id="color_ids"
                                    value={colorId} onChange={(e) => setColorId(e.target.value)}
                                    className='w-full rounded-md border-1 border-stone-400'>
                                    <option value="">--- Select Color ---</option>
                                    {colors.map((c_item, c_sindex) => (
                                        <option value={c_item._id} key={c_sindex}>
                                            {c_item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* <div>
                                <label htmlFor="product_type" className='block my-2 font-bold'>
                                    Select Product Type
                                </label>
                                <select name="product_type" id="product_type" className='w-full rounded-md border-1 border-stone-400'>
                                    <option value=""> Nothing Selected </option>
                                    <option value=""> Featured </option>
                                    <option value=""> New Arrivals </option>
                                    <option value=""> On Sale </option>
                                </select>
                            </div> */}
                            <div>
                                <label htmlFor="is_featured" className="block my-2 font-bold">
                                    Is Featured
                                </label>
                                <select
                                    name="is_featured"
                                    id="is_featured"
                                    className="w-full rounded-md border border-stone-400"
                                    value={productDetails.is_featured ? "yes" : "no"}
                                    onChange={(e) =>
                                        setProductDetails((prev) => ({
                                            ...prev,
                                            is_featured: e.target.value === "yes",
                                        }))
                                    }
                                >
                                    <option value="">Nothing Selected</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="is_new_arrival" className='block my-2 font-bold'>
                                    Is New Arrival
                                </label>
                                <select name="is_new_arrival" id="is_new_arrival"
                                    className='w-full rounded-md border-1 border-stone-400'
                                    value={productDetails.is_new_arrival ? "yes" : "no"}
                                    onChange={(e) =>
                                        setProductDetails((prev) => ({
                                            ...prev,
                                            is_new_arrival: e.target.value === "yes",
                                        }))
                                    }
                                >
                                    <option value=""> Nothing Selected </option>
                                    <option value="yes"> Yes </option>
                                    <option value="no"> No </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="is_on_sale" className='block my-2 font-bold'>
                                    Is On Sale
                                </label>
                                <select name="is_on_sale" id="is_on_sale"
                                    className='w-full rounded-md border-1 border-stone-400'
                                    value={productDetails.is_on_sale ? "yes" : "no"}
                                    onChange={(e) =>
                                        setProductDetails((prev) => ({
                                            ...prev,
                                            is_on_sale: e.target.value === "yes",
                                        }))
                                    }
                                >
                                    <option value=""> Nothing Selected </option>
                                    <option value="yes"> Yes </option>
                                    <option value="no"> No </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="is_best_selling" className='block my-2 font-bold'>
                                    Is Best Selling
                                </label>
                                <select name="is_best_selling" id="is_best_selling"
                                    className='w-full rounded-md border-1 border-stone-400'
                                    value={productDetails.is_best_selling ? "yes" : "no"}
                                    onChange={(e) =>
                                        setProductDetails((prev) => ({
                                            ...prev,
                                            is_best_selling: e.target.value === "yes",
                                        }))
                                    }
                                >
                                    <option value=""> Nothing Selected </option>
                                    <option value="yes"> Yes </option>
                                    <option value="no"> No </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="is_top_rated" className='block my-2 font-bold'>
                                    Is Top Rated
                                </label>
                                <select name="is_top_rated" id="is_top_rated"
                                    className='w-full rounded-md border-1 border-stone-400'
                                    value={productDetails.is_top_rated ? "yes" : "no"}
                                    onChange={(e) =>
                                        setProductDetails((prev) => ({
                                            ...prev,
                                            is_top_rated: e.target.value === "yes",
                                        }))
                                    }
                                >
                                    <option value=""> Nothing Selected </option>
                                    <option value="yes"> Yes </option>
                                    <option value="no"> No </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="is_upsale" className='block my-2 font-bold'>
                                    Is Up Sell
                                </label>
                                <select name="is_upsale" id="is_upsale"
                                    className='w-full rounded-md border-1 border-stone-400'
                                    value={productDetails.is_upsale ? "yes" : "no"}
                                    onChange={(e) =>
                                        setProductDetails((prev) => ({
                                            ...prev,
                                            is_upsale: e.target.value === "yes",
                                        }))
                                    }
                                >
                                    <option value=""> Nothing Selected </option>
                                    <option value="yes"> Yes </option>
                                    <option value="no"> No </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="actual_price" className='block my-2 font-bold'>
                                    Actual Price
                                </label>
                                <input type="text" id='actual_price' name='actual_price' placeholder='Enter Actual Price...' className='w-full rounded-md border-1 border-stone-400' defaultValue={productDetails.actual_price} />
                            </div>
                            <div>
                                <label htmlFor="selling_price" className='block my-2 font-bold'>
                                    Sale Price
                                </label>
                                <input type="text" id='selling_price' name='selling_price' placeholder='Enter Sale Price...' className='w-full rounded-md border-1 border-stone-400' defaultValue={productDetails.selling_price} />
                            </div>
                            <div>
                                <label htmlFor="total_stocks" className='block my-2 font-bold'>
                                    Total in Stocks
                                </label>
                                <input type="text" id='total_stocks' name='total_stocks' placeholder='Enter Total in Stocks...' className='w-full rounded-md border-1 border-stone-400' defaultValue={productDetails.total_stocks} />
                            </div>
                            <div>
                                <label htmlFor="product_code" className='block my-2 font-bold'>
                                    Product Code
                                </label>
                                <input type="text" id='product_code' name='product_code' placeholder='Enter Product Code...' className='w-full rounded-md border-1 border-stone-400' defaultValue={productDetails.product_code} />
                            </div>
                            <div>
                                <label htmlFor="product_dimensions" className='block my-2 font-bold'>
                                    Product Dimentions
                                </label>
                                <input type="text" id='product_dimensions' name='product_dimensions' placeholder='Enter Product Dimentions...' className='w-full rounded-md border-1 border-stone-400' defaultValue={productDetails.product_dimensions} />
                            </div>
                            <div>
                                <label htmlFor="product_delivery_days" className='block my-2 font-bold'>
                                    Delivery Days
                                </label>
                                <input type="number" id='product_delivery_days' name='product_delivery_days' placeholder='Enter Delivery Days...' className='w-full rounded-md border-1 border-stone-400' defaultValue={productDetails.product_delivery_days} />
                            </div>
                            <div>
                                <label htmlFor="product_order" className='block my-2 font-bold'>
                                    Order
                                </label>
                                <input type="number" id='product_order' name='order' placeholder='Enter Order...' className='w-full rounded-md border-1 border-stone-400' defaultValue={productDetails.order} />
                            </div>

                        </div>
                    </div>
                    <div>
                        {/* Short Description */}
                        <div className='mt-6'>
                            <label className="block mb-2 text-lg font-semibold">Short Description</label>
                            <JoditEditor
                                ref={shortDescRef}
                                value={shortDescription}
                                config={{
                                    readonly: false,
                                    height: 300,
                                    toolbarSticky: true,
                                    uploader: { insertImageAsBase64URI: true }
                                }}
                                onBlur={(newContent) => setShortDescription(newContent)} // fires when user stops typing or blurs
                            />
                        </div>

                        {/* Long Description */}
                        <div className="mt-6">
                            <label className="block mb-2 text-lg font-semibold">Long Description</label>
                            <JoditEditor
                                ref={longDescRef}
                                value={longDescription}
                                config={{
                                    readonly: false,
                                    height: 500,
                                    toolbarSticky: true,
                                    uploader: { insertImageAsBase64URI: true }
                                }}
                                onBlur={(newContent) => setLongDescription(newContent)}
                            />
                        </div>





                        <button
                            type="submit"
                            className={`text-white bg-gradient-to-br ${updateIdState ? "from-purple-600" : "from-green-600"} to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-3 text-center mt-5 cursor-pointer`}>
                            {updateIdState ? "Update Product" : "Create Product"}
                        </button>

                    </div>
                </form>
            </div>



        </>
    )
}
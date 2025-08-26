import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { MdFilterListAlt } from "react-icons/md";
import { MdFilterAltOff } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaBagShopping, FaPen } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Breadcrumb from '../common/Breadcrumb';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import axios from 'axios';
import { TbEraserOff } from 'react-icons/tb';
import { MdCurrencyRupee } from "react-icons/md";
import { toast } from 'react-toastify';







export default function ProductView() {

    let [searchfilter, setSearchfilter] = useState(true);

    let [categories, setCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);
    let [subSubCategories, setSubSubCategories] = useState([]);
    let [products, setProducts] = useState([]);
    let [colors, setColors] = useState([]);
    let [materials, setMaterials] = useState([]);

    let [currentPage, setCurrentPage] = useState('1');
    let [currLimit, setCurrLimit] = useState('5');
    let [totalPages, setTotalPages] = useState('');

    let [searchStr, setSearchStr] = useState('');
    let [parentCateId, setParentCateID] = useState('');
    let [subCateId, setSubCateID] = useState('');
    let [subSubCateId, setSubSubCateId] = useState('');
    let [colorId, setColorId] = useState('');
    let [materialId, setMaterialId] = useState('');

    let [checkedValue, setCheckedValue] = useState([]);
    let [apiStatus, setApiStatus] = useState(false);

    let [imagePath, setImagePath] = useState('');






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

        axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_PRODUCT_VIEW, {
            page: currentPage,
            limit: currLimit,
            name: searchStr,
            parent_category_id: parentCateId,
            child_category_id: subCateId,
            sub_child_category_id: subSubCateId,
        })
            .then((response) => {
                if (response.data._status == true) {
                    // console.log(response.data);
                    setProducts(response.data._data);
                    setTotalPages(response.data._pagination.total_pages);
                    setImagePath(response.data._image_path);
                } else {
                    setProducts([]);
                }
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })

    }, [currentPage, currLimit, searchStr, apiStatus, parentCateId, subCateId, subSubCateId, colorId, materialId]);




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




























    var checkedAll = () => {
        if (products.length != checkedValue.length) {
            let data = [];
            products.forEach((item, index) => {
                // console.log(item);
                data.push(item._id)
            })
            // console.log(data);
            setCheckedValue([...data]);
        } else {
            setCheckedValue([]);
        }
    }

    var singleChecked = (id) => {
        // console.log(id)
        if (checkedValue.includes(id)) {
            let data = checkedValue.filter((item, index) => {
                if (item != id) {
                    return item
                }
            })
            data = [...data];
            setCheckedValue(data);
            // console.log(data)
        } else {
            let data = [...checkedValue, id]
            setCheckedValue(data);
            // console.log(data)
        }
    }










    let changeStatus = () => {

        if (checkedValue.length > 0) {
            axios.put(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_PRODUCT_CHANGE_STATUS, {
                id: checkedValue
            })
                .then((response) => {
                    if (response.data._status == true) {
                        // console.log(response.data);
                        toast.success(response.data._message);
                        setApiStatus(!apiStatus);
                        setCheckedValue([]);
                    } else {
                        toast.error(response.data._message);
                    }
                })
                .catch((error) => {
                    toast.error('Something went wrong');
                })
        } else {
            toast.error('Please select a record!');
        }

    }

    let deleleRecords = () => {

        if (checkedValue.length > 0) {
            if (confirm('Confirm delete those records?')) {
                axios.put(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_PRODUCT_DELETE, {
                    id: checkedValue
                })
                    .then((response) => {
                        if (response.data._status == true) {
                            // console.log(response.data);
                            toast.success(response.data._message);
                            setApiStatus(!apiStatus);
                        } else {
                            toast.error(response.data._message);
                        }
                    })
                    .catch((error) => {
                        toast.error('Something went wrong');
                    })
            }
        } else {
            toast.error('Please select a record!');
        }

    }




    const stripHtml = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    };



















    let handleClearAll = () => {
        setSearchStr('');
        setParentCateID('');
        setSubCateID('');
        setSubSubCateId('');
        setColorId('');
        setMaterialId('');
    }









    // console.log(products);












    return (
        <>



            <Breadcrumb fst_para={<><FaBagShopping className='text-blue-500' /> Products</>} fst_path="/product/view" snd_para="View" />


            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10'>

                <div className={`
                    p-4 border-1 border-stone-400 w-full rounded-lg mb-5
                    ${searchfilter ? "hidden" : ""}
                `}>

                    <h4 className='text-[14px] font-semibold flex items-center justify-start gap-3 mb-2'>
                        Filters
                    </h4>

                    <div className='grid grid-cols-3 gap-2'>
                        <div className=''>
                            <select value={parentCateId} onChange={(e) => setParentCateID(e.target.value)} className='h-[40px] w-full rounded-lg'>
                                <option value="">--- Select Parent Category ---</option>
                                {categories.map((item, index) => (
                                    <option value={item._id} key={index}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className=''>
                            <select
                                value={subCateId} onChange={(e) => setSubCateID(e.target.value)} className='h-[40px] w-full rounded-lg'>
                                <option value="">--- Select Sub-Category ---</option>
                                {subCategories.map((sitem, sindex) => (
                                    <option value={sitem._id} key={sindex}>
                                        {sitem.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className=''>
                            <select
                                value={subSubCateId} onChange={(e) => setSubSubCateId(e.target.value)} className='h-[40px] w-full rounded-lg'>
                                <option value="">--- Select Sub Sub-Category ---</option>
                                {subSubCategories.map((s_sitem, s_sindex) => (
                                    <option value={s_sitem._id} key={s_sindex}>
                                        {s_sitem.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2 mt-3'>
                        <div className=''>
                            <select
                                value={colorId} onChange={(e) => setColorId(e.target.value)} className='h-[40px] w-full rounded-lg'>
                                <option value="">--- Select Color ---</option>
                                {colors.map((c_item, c_sindex) => (
                                    <option value={c_item._id} key={c_sindex}>
                                        {c_item.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className=''>
                            <select
                                value={materialId} onChange={(e) => setMaterialId(e.target.value)} className='h-[40px] w-full rounded-lg'>
                                <option value="">--- Select Material ---</option>
                                {materials.map((m_item, m_index) => (
                                    <option value={m_item._id} key={m_index}>
                                        {m_item.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-2 mt-3'>
                        <input type="text" name="" id="" placeholder='Search Products...' className='h-[40px] w-full rounded-lg' value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />
                        <button type='submit' className='bg-blue-600 text-white h-[40px] px-5 rounded-lg cursor-pointer'>
                            <IoSearchSharp />
                        </button>
                        <button type='button' className='bg-red-600 text-white h-[40px] px-5 rounded-lg cursor-pointer' onClick={() => handleClearAll()}>
                            <TbEraserOff />
                        </button>
                    </div>

                </div>



                <div className='border-1 w-full rounded-xl'>
                    <div className='bg-slate-100 border-b-1 flex justify-between items-center py-5 px-10 rounded-xl'>
                        <h1 className='text-2xl font-semibold'>
                            View Product
                        </h1>
                        <div className='flex items-center justify-start gap-3'>
                            <button className='bg-blue-600 text-white p-3 rounded-lg cursor-pointer' onClick={() => setSearchfilter(!searchfilter)}>
                                {searchfilter ? <MdFilterListAlt /> : <MdFilterAltOff />}

                            </button>
                            <button className='bg-green-700 text-white py-2 px-5 rounded-lg cursor-pointer font-bold' onClick={changeStatus}>
                                Change Status
                            </button>
                            <button className='bg-red-700 text-white py-2 px-5 rounded-lg cursor-pointer font-bold' onClick={deleleRecords}>
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
                                        <th scope="col" className="px-6 py-3 flex items-center justify-center gap-1">
                                            <input
                                                type="checkbox"
                                                onChange={checkedAll}
                                                checked={products.length === checkedValue.length}
                                            />
                                            Sl. No.
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Parent Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Sub-Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Sub Sub-Category
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Product Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Short Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Thumbnails
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Order
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

                                    {
                                        products.length > 0
                                            ?
                                            (
                                                products.map((item, index) => {
                                                    return (
                                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                            <td className="px-6 py-4">
                                                                <div className='flex justify-center items-center gap-2'>
                                                                    <input
                                                                        type="checkbox"
                                                                        onChange={() => singleChecked(item._id)}
                                                                        checked={checkedValue.includes(item._id)}
                                                                    />
                                                                    {index + 1}.
                                                                </div>
                                                            </td>
                                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {item.parent_category_ids && item.parent_category_ids.map((p_item, p_index) => (
                                                                    <span key={p_index}>
                                                                        {p_item.name}
                                                                    </span>
                                                                ))}
                                                            </td>
                                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {item.sub_category_ids && item.sub_category_ids.map((s_item, s_index) => (
                                                                    <span key={s_index}>
                                                                        {s_item.name}
                                                                    </span>
                                                                ))}

                                                            </td>
                                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {item.sub_sub_category_ids && item.sub_sub_category_ids.map((ss_item, ss_index) => (
                                                                    <span key={ss_index}>
                                                                        {ss_item.name}
                                                                    </span>
                                                                ))}

                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {item.name}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {stripHtml(item.short_description).substring(0, 20)}...
                                                                <span className='block text-blue-600 font-medium cursor-pointer'>Read More</span>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className='line-through text-red-600 flex items-center justify-start gap-0'>
                                                                    <MdCurrencyRupee />
                                                                    {item.actual_price}
                                                                </span>
                                                                <span className='font-bold text-green-600 flex items-center justify-start gap-0'>
                                                                    <MdCurrencyRupee />
                                                                    {item.selling_price}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-center">
                                                                {
                                                                    item.front_image
                                                                        ?
                                                                        <img src={imagePath + item.front_image} alt="" className='w-15 rounded-lg' />
                                                                        :
                                                                        "NA"
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {item.order}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {
                                                                    item.status == 1
                                                                        ?
                                                                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                                            Active
                                                                        </button>
                                                                        :
                                                                        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                                            Inactive
                                                                        </button>
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <Link to={`/product/update/${item._id}`}>
                                                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                                        <FaPen />
                                                                    </button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            )
                                            :
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="px-6 py-4 font-bold" colSpan={10} align='center'>
                                                    No Data Found!
                                                </td>
                                            </tr>

                                    }

                                </tbody>
                            </table>
                        </div>


                        {/* ////////////////////////////////////////////////////////////// */}

                        <div className='my-3'>
                            <ResponsivePagination
                                current={currentPage}
                                total={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div>

                        {/* ////////////////////////////////////////////////////////////// */}
                    </div>
                </div>

            </div>



        </>
    )
}
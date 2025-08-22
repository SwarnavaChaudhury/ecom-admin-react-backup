import React, { useEffect, useState } from 'react'
import { MdFilterListAlt } from "react-icons/md";
import { MdFilterAltOff } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Breadcrumb from '../common/Breadcrumb';
import axios from 'axios';
import { TbEraserOff } from "react-icons/tb";
import { toast } from 'react-toastify';
import { Link } from 'react-router';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';





export default function SubSubCateView() {


    let [searchfilter, setSearchfilter] = useState(true);

    let [categories, setCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);
    let [subSubCategories, setSubSubCategories] = useState([]);

    let [currentPage, setCurrentPage] = useState('1');
    let [currLimit, setCurrLimit] = useState('5');
    let [totalPages, setTotalPages] = useState('');

    let [searchStr, setSearchStr] = useState('');
    let [parentCateId, setParentCateID] = useState('');
    let [subCateId, setSubCateID] = useState('');

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

        axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_SUB_SUB_CATEGORY_VIEW, {
            page: currentPage,
            limit: currLimit,
            name: searchStr,
            parent_category_id: parentCateId,
            child_category_id: subCateId,
        })
            .then((response) => {
                if (response.data._status == true) {
                    // console.log(response.data);
                    setSubSubCategories(response.data._data);
                    setTotalPages(response.data._pagination.total_pages);
                    setImagePath(response.data._image_path);
                } else {
                    setSubSubCategories([]);
                }
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })

    }, [currentPage, currLimit, searchStr, apiStatus, parentCateId, subCateId]);




























    var checkedAll = () => {
        if (subSubCategories.length != checkedValue.length) {
            let data = [];
            subSubCategories.forEach((item, index) => {
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
            axios.put(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_SUB_SUB_CATEGORY_CHANGE_STATUS, {
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
                axios.put(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_SUB_SUB_CATEGORY_DELETE, {
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























    let handleClearAll = () => {
        setSearchStr('');
        setParentCateID('');
        setSubCateID('');
    }












    return (
        <>


            <Breadcrumb fst_para={<><FaBarsStaggered className='text-blue-500' /> Sub-Category</>} fst_path="/category/sub-sub-category/view" snd_para="View Sub Sub-Category" />


            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10'>


                <div className={`
                    p-4 border-1 border-stone-400 w-full grid grid-cols-4 gap-2 rounded-lg mb-5
                    ${searchfilter ? "hidden" : ""}
                `}>
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
                        <input type="text" name="" id="" placeholder='Search Sub Sub-Category...' className='h-[40px] w-full rounded-lg' value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />
                    </div>
                    <div className='flex justify-start items-center gap-2'>
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
                            View Sub Sub-Category
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
                                        <th scope="col" className="px-6 py-3">
                                            <input
                                                type="checkbox"
                                                onChange={checkedAll}
                                                checked={subSubCategories.length === checkedValue.length}
                                            />
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Parent Category Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Sub-Category Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Sub Sub-Category Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Image
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
                                        subSubCategories.length > 0
                                            ?
                                            (
                                                subSubCategories.map((item, index) => {
                                                    return (
                                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                            <td className="px-6 py-4">
                                                                <input
                                                                    type="checkbox"
                                                                    onChange={() => singleChecked(item._id)}
                                                                    checked={checkedValue.includes(item._id)}
                                                                />
                                                            </td>
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {item.parent_category_id.name}
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {item.child_category_id.name}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {item.name}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {/* <img src="https://packshifts.in/images/iso.png" alt="" className='w-15' /> */}
                                                                {
                                                                    item.image != ''
                                                                        ?
                                                                        <img src={imagePath + item.image} alt="" className='w-15 h-15 rounded-full' />
                                                                        :
                                                                        "N/A"
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
                                                                <Link to={`/category/sub-sub-category/update/${item._id}`}>
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
                                                <td className="px-6 py-4 font-bold" colSpan={7} align='center'>
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
import React, { useEffect, useState } from 'react'
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
import { SiMaterialdesignicons } from "react-icons/si";
import Breadcrumb from '../common/Breadcrumb';
import axios from 'axios'
import { toast } from 'react-toastify'
import { TbEraserOff } from "react-icons/tb";





export default function MaterialView() {

    let [searchfilter, setSearchfilter] = useState(true)
    let [materials, setMaterials] = useState([]);

    let [currentPage, setCurrentPage] = useState('1');
    let [currLimit, setCurrLimit] = useState('5');
    let [searchStr, setSearchStr] = useState('');

    let [materialPagination, setMaterialPagination] = useState([])

    let [checkedValue, setCheckedValue] = useState([]);
    let [apiStatus, setApiStatus] = useState(false);

    useEffect(() => {

        axios.post(`http://localhost:8000/api/admin/material/view`, {
            page: currentPage,
            limit: currLimit,
            name: searchStr,
        })
            .then((response) => {
                if (response.data._status == true) {
                    console.log(response.data);
                    setMaterials(response.data._data);
                    setMaterialPagination(response.data._pagination);
                } else {
                    setMaterials([]);
                }
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })

    }, [currentPage, currLimit, searchStr, apiStatus])


    // let HandleSearch = (event) => {
    //     event.preventDefault();
    //     setCurrentPage('1');
    //     setSearchStr(event.target.search_materials.value);
    // }




    var checkedAll = () => {
        if (materials.length != checkedValue.length) {
            let data = [];
            materials.forEach((item, index) => {
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
            axios.put(`http://localhost:8000/api/admin/material/change-status`, {
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
                axios.put(`http://localhost:8000/api/admin/material/delete`, {
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





    return (
        <>



            <Breadcrumb fst_para={<><SiMaterialdesignicons className='text-blue-500' /> Material</>} fst_path="/material/view" snd_para="View" />



            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10'>


                <div className={`
                            p-4 border-1 border-stone-400 w-full rounded-lg mb-5
                            ${searchfilter ? "hidden" : ""}
                        `}>
                    {/* <form className='flex gap-2' onSubmit={HandleSearch}> */}
                    <form className='flex gap-2'>
                        <input type="text" name="search_materials" id="search_materials" className='h-[40px] w-100 rounded-lg' value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />
                        <button type='submit' className='bg-blue-600 text-white h-[40px] px-5 rounded-lg cursor-pointer'>
                            <IoSearchSharp />
                        </button>
                        <button type='button' className='bg-red-600 text-white h-[40px] px-5 rounded-lg cursor-pointer' onClick={() => setSearchStr('')}>
                            <TbEraserOff />
                        </button>
                    </form>
                </div>



                <div className='border-1 w-full rounded-xl'>
                    <div className='bg-slate-100 border-b-1 flex justify-between items-center py-5 px-10 rounded-xl'>
                        <h1 className='text-2xl font-semibold'>
                            View Material
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
                                            <input type="checkbox" name="" id="" onClick={checkedAll} checked={materials.length == checkedValue.length ? 'checked' : ''} />
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Material Name
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
                                        materials.length > 0
                                            ?
                                            materials.map((item, index) => {
                                                return (
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                                        <td className="px-6 py-4">
                                                            <input type="checkbox" name="" id="" onClick={() => singleChecked(item._id)} checked={checkedValue.includes(item._id) ? 'checked' : ''} />
                                                        </td>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {item.name}
                                                        </th>
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
                                                            <Link to={`/material/update/${item._id}`}>
                                                                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                                                    <FaPen />
                                                                </button>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            :
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="px-6 py-4 font-bold" colSpan={5} align='center'>
                                                    No Data Found!
                                                </td>
                                            </tr>
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className='w-full py-3 flex justify-center items-center gap-2'>
                            {
                                materials.length > 0
                                    ?
                                    Array.from({ length: materialPagination.total_pages }, (_, index) => {
                                        return (
                                            <button
                                                onClick={() => setCurrentPage(index + 1)}
                                                key={index}
                                                className='h-[40px] w-[40px] border border-gray-400 rounded-md cursor-pointer'
                                            >
                                                {index + 1}
                                            </button>
                                        );
                                    })
                                    :
                                    ''
                            }
                        </div>

                        {/* ////////////////////////////////////////////////////////////// */}
                    </div>
                </div>

            </div>



        </>
    )
}

import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
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
import Breadcrumb from '../common/Breadcrumb';
import axios from 'axios'
import { toast } from 'react-toastify'




export default function ColorAdd() {

    // const { id: updateId } = useParams();
    // const updateIdState = Boolean(updateId);

    const [colorDetails, setColorDetails] = useState('')

    const params = useParams();
    const updateIdState = params.id;

    const navigate = useNavigate();



    useEffect(() => {

        if (updateIdState) {

            axios.post(`http://localhost:8000/api/admin/color/details`, {
                id: updateIdState
            })
                .then((response) => {
                    if (response.data._status == true) {
                        setColorDetails(response.data._data);
                    } else {
                        setColorDetails('');
                    }
                })
                .catch((error) => {
                    toast.error('Something went wrong!!');
                })
        }

    }, [])

    console.log(colorDetails)


    let formHandler = (event) => {

        event.preventDefault();

        const data = {
            name: event.target.color_name.value,
            code: event.target.color_code.value,
            order: event.target.color_order.value,
        }

        // console.log(data);

        if (updateIdState) {
            // update old data
            axios.put(`http://localhost:8000/api/admin/color/update/${updateIdState}`, data)
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/color/view');
                    } else {
                        toast.error(success.data._message);
                    }
                })
                .catch((error) => {
                    toast.error(error.data._message);
                })

        } else {
            // insert new data
            axios.post(`http://localhost:8000/api/admin/color/create`, data)
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/color/view');
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
                    <Breadcrumb fst_para={<><IoIosColorPalette className='text-blue-500' /> Colors</>} fst_path="/color/view" snd_para="Update" />
                    :
                    <Breadcrumb fst_para={<><IoIosColorPalette className='text-blue-500' /> Colors</>} fst_path="/color/view" snd_para="Add" />
            }



            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        {updateIdState ? 'Update Colors' : 'Add Colors'}
                    </h1>
                </div>
                <div className='m-5'>
                    <form onSubmit={formHandler}>
                        <label htmlFor="color_name" className='block my-2 font-bold'>
                            Color Name
                        </label>
                        <input type="text" id='color_name' name='color_name' placeholder='Enter Color Name...' className='w-full rounded-md border-1 border-stone-400' autoComplete='off' defaultValue={colorDetails.name} />

                        <label htmlFor="color_code" className='block my-2 font-bold'>
                            Color Picker
                        </label>
                        <input type="color" name="color_code" id="color_code" defaultValue={colorDetails.code} />

                        <label htmlFor="color_order" className='block my-2 font-bold'>
                            Order
                        </label>
                        <input type="text" id='color_order' name='color_order' placeholder='Enter Color Order...' className='w-full rounded-md border-1 border-stone-400' autoComplete='off' defaultValue={colorDetails.order} />

                        <button type='submit' className={`text-white py-2 px-5 mt-5 rounded-lg cursor-pointer ${updateIdState ? 'bg-violet-700' : 'bg-green-600'} `}>
                            {updateIdState ? 'Update Color' : 'Add Color'}
                        </button>
                    </form>

                </div>

            </div>




        </>
    )
}

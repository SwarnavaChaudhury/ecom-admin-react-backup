import React, { useEffect, useState } from 'react'

import { FaMapLocationDot } from "react-icons/fa6";
import Breadcrumb from '../common/Breadcrumb';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';





export default function CountryAdd() {

    let [countryDetails, setcountryDetails] = useState('')

    const params = useParams();
    const updateIdState = params.id;

    const navigate = useNavigate();

    useEffect(() => {

        if (updateIdState) {

            axios.post(`http://localhost:8000/api/admin/country/details`, {
                id: updateIdState
            })
                .then((response) => {
                    if (response.data._status == true) {
                        setcountryDetails(response.data._data);
                    } else {
                        setcountryDetails('');
                    }
                })
                .catch((error) => {
                    toast.error('Something went wrong!!');
                })
        }

    }, []);







    let handleForm = (event) => {

        event.preventDefault();

        let data = {
            name: event.target.country_name.value,
            order: event.target.country_order.value,
        }

        if (updateIdState) {
            // update old data

            axios.put(`http://localhost:8000/api/admin/country/update/${updateIdState}`, data)
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/country/view');
                    } else {
                        toast.error(success.data._message);
                    }
                })
                .catch((error) => {
                    toast.error(error.data._message);
                })

        } else {
            // insert new data

            axios.post(`http://localhost:8000/api/admin/country/create`, data)
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/country/view');
                    } else {
                        toast.error(success.data._message);
                    }
                })
                .catch((error) => {
                    console.log(error)
                    toast.error(error.data._message);
                })

        }

    }







    return (
        <>


            {
                updateIdState
                    ?
                    <Breadcrumb fst_para={<><FaMapLocationDot className='text-blue-500' /> Courtry</>} fst_path="/country/view" snd_para="Update" />
                    :
                    <Breadcrumb fst_para={<><FaMapLocationDot className='text-blue-500' /> Courtry</>} fst_path="/country/view" snd_para="Add" />
            }


            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        {
                            updateIdState ? 'Update Country' : 'Add Country'
                        }
                    </h1>
                </div>
                <div className='m-5'>

                    <form onSubmit={handleForm}>
                        <div>
                            <label htmlFor="country_name" className='block my-2 font-bold'>
                                Country Name
                            </label>
                            <input type="text" id='country_name' name='country_name' placeholder='Enter Country Name...' className='w-full rounded-md border-1 border-stone-400' defaultValue={countryDetails.name} />

                            <label htmlFor="country_order" className='block my-2 font-bold'>
                                Country Order
                            </label>
                            <input type="text" id='country_order' name='country_order' placeholder='Enter Category Order...' className='w-full rounded-md border-1 border-stone-400' defaultValue={countryDetails.order} />
                        </div>

                        <button type='submit' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                            Add Country
                        </button>
                    </form>

                </div>

            </div>


        </>
    )
}
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { SiMaterialdesignicons } from "react-icons/si";
import Breadcrumb from '../common/Breadcrumb';
import { toast } from 'react-toastify'
import axios from 'axios'





export default function MaterialAdd() {


    let [materialDetails, setMaterialDetails] = useState('')

    const params = useParams();
    const updateIdState = params.id;

    const navigate = useNavigate();

    useEffect(() => {

        if (updateIdState) {

            axios.post(`http://localhost:8000/api/admin/material/details`, {
                id: updateIdState
            })
                .then((response) => {
                    if (response.data._status == true) {
                        setMaterialDetails(response.data._data);
                    } else {
                        setMaterialDetails('');
                    }
                })
                .catch((error) => {
                    toast.error('Something went wrong!!');
                })
        }

    }, [])

    // console.log(materialDetails);


    let handleForm = (event) => {

        event.preventDefault();

        let data = {
            name: event.target.material_name.value,
            order: event.target.material_order.value,
        }

        if (updateIdState) {
            // update old data

            axios.put(`http://localhost:8000/api/admin/material/update/${updateIdState}`, data)
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/material/view');
                    } else {
                        toast.error(success.data._message);
                    }
                })
                .catch((error) => {
                    toast.error(error.data._message);
                })

        } else {
            // insert new data

            axios.post(`http://localhost:8000/api/admin/material/create`, data)
                .then((success) => {

                    if (success.data._status == true) {
                        toast.success(success.data._message);
                        navigate('/material/view');
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
                    <Breadcrumb fst_para={<><SiMaterialdesignicons className='text-blue-500' /> Material</>} fst_path="/material/view" snd_para="Update" />
                    :
                    <Breadcrumb fst_para={<><SiMaterialdesignicons className='text-blue-500' /> Material</>} fst_path="/material/view" snd_para="Add" />
            }


            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        {
                            updateIdState ? 'Update Materials' : 'Add Materials'
                        }
                    </h1>
                </div>
                <div className='m-5'>
                    <form onSubmit={handleForm}>
                        <label htmlFor="material_name" className='block my-2 font-bold'>
                            Material Name
                        </label>
                        <input type="text" id='material_name' name='material_name' placeholder='Enter Material Name...' className='w-full rounded-md border-1 border-stone-400' defaultValue={materialDetails.name} />

                        <label htmlFor="material_order" className='block my-2 font-bold'>
                            Order
                        </label>
                        <input type="text" id='material_order' name='material_order' placeholder='Enter Material Order...' className='w-full rounded-md border-1 border-stone-400' defaultValue={materialDetails.order} />

                        <button type='submit' className={`text-white py-2 px-5 mt-5 rounded-lg cursor-pointer ${updateIdState ? "bg-violet-700" : "bg-green-600"} `}>
                            {
                                updateIdState ? 'Update Material' : 'Add Material'
                            }
                        </button>

                    </form>
                </div>

            </div>



        </>
    )
}

import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone';

import { Link } from 'react-router'
import SideBar from '../common/SideBar'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { MdHomeFilled } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import Breadcrumb from '../common/Breadcrumb';





export default function FaqAdd() {


    const [selectedFile, setSelectedFile] = useState(null); // 🟢 state for file

    const onDrop = useCallback((acceptedFiles) => {
        // console.log(acceptedFiles);
        setSelectedFile(acceptedFiles[0]); // get the first file only
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const removeFile = () => {
        setSelectedFile(null);
    };



    return (
        <>


            <Breadcrumb fst_para={<><RiQuestionnaireFill className='text-blue-500' /> Faqs</>} fst_path="/faq/view" snd_para="Add" />



            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        Add Faq
                    </h1>
                </div>
                <div className='m-5'>

                    <div>
                        <label htmlFor="faq_ques" className='block my-2 font-bold'>
                            Question
                        </label>
                        <input type="text" id='faq_ques' placeholder='Enter Question...' className='w-full rounded-md border-1 border-stone-400' />

                        <label htmlFor="faq_answer" className='block my-2 font-bold'>
                            Answer
                        </label>
                        <textarea name="faq_answer" id="faq_answer" rows={6} className='w-full rounded-md border-1 border-stone-400'></textarea>

                        <label htmlFor="faq_order" className='block my-2 font-bold'>
                            Order
                        </label>
                        <input type="text" id='faq_order' placeholder='Enter Category Order...' className='w-full rounded-md border-1 border-stone-400' />
                    </div>


                    <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                        Add Faq
                    </button>


                </div>

            </div>


        </>
    )
}
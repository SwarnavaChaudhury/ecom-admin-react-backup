import React, { useState } from 'react'
import { Link } from 'react-router'
import { IoPieChart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { FaSliders } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { RiQuestionnaireFill } from "react-icons/ri";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";





export default function Breadcrumb({ fst_para, fst_path, snd_para }) {

    return (
        <>
            <div className='w-full flex items-center justify-start gap-2 text-stone-700 border-0 border-b-2 border-stone-400 py-2 mb-5 text-xl'>

                <Link to='/home' className='flex items-center justify-start gap-1'>
                    <MdHomeFilled className='text-blue-500' />
                    Home
                </Link>
                /
                {
                    fst_para
                        ?
                        < Link to={fst_path} className='flex items-center justify-start gap-1'>
                            {/* <FaUser className='text-blue-500' />
                            User */}
                            {fst_para}

                        </Link>
                        :
                        ""
                }

                /
                {
                    snd_para
                        ?
                        <span>
                            {snd_para}
                        </span>
                        :
                        ""
                }
            </div >

        </>
    )
}
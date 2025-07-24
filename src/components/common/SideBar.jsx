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






export default function SideBar() {

    let [dmenu, setDMenu] = useState(-1)


    return (
        <>

            <section className='h-screen sticky top-0 left-0'>
                <section className='border-0 border-r-2 border-stone-200 p-3 
                    h-full overflow-y-auto 
                    [&::-webkit-scrollbar]:w-[5px] 
                    [&::-webkit-scrollbar-thumb]:bg-blue-300
                    '>

                    <img src="/imgs/wscube-tech-logo-2.svg" alt="" className='w-35 m-5' />
                    <hr />

                    <ul className='text-xl ml-2 mt-4'>
                        <li>
                            <Link to={'/dashboard'} className='flex items-center justify-start gap-1 text-gray-500 border-b border-gray-200 hover:text-black hover:bg-[#F9FAFB] py-3'>
                                <IoPieChart />
                                Dashboard
                            </Link>
                        </li>
                        <li>


                            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white text-gray-900" data-inactive-classes="text-gray-500">

                                <h2 id="user-menu-heading" onClick={() => setDMenu(dmenu == 1 ? -1 : 1)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#user-menu-content" aria-expanded="false" aria-controls="user-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaUser />
                                            User
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 1 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/user' className='sub-menu'>
                                                <FaArrowRight />
                                                View User
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="enquiry-menu-heading" onClick={() => setDMenu(dmenu == 2 ? -1 : 2)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#enquiry-menu-content" aria-expanded="false" aria-controls="enquiry-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaMessage />
                                            Enquirys
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>

                                {
                                    dmenu == 2 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/enquiry' className='sub-menu'>
                                                <FaArrowRight />
                                                Contact Enquirys
                                            </Link>
                                            <Link to='/newsletter' className='sub-menu'>
                                                <FaArrowRight />
                                                Newsletters
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="colors-menu-heading" onClick={() => setDMenu(dmenu == 3 ? -1 : 3)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#colors-menu-content" aria-expanded="false" aria-controls="colors-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <IoIosColorPalette />
                                            Colors
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {dmenu == 3 && <div>
                                    <div className="py-2 border-b border-gray-200">

                                        <Link to='/color/add' className='sub-menu'>
                                            <FaArrowRight />
                                            Add Color
                                        </Link>
                                        <Link to='/color/view' className='sub-menu'>
                                            <FaArrowRight />
                                            View Color
                                        </Link>

                                    </div>
                                </div>}


                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="material-menu-heading" onClick={() => setDMenu(dmenu == 4 ? -1 : 4)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#material-menu-content" aria-expanded="false" aria-controls="material-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <SiMaterialdesignicons />
                                            Materials
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 4 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/material/add' className='sub-menu'>
                                                <FaArrowRight />
                                                Add Materials
                                            </Link>
                                            <Link to='/material/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Materials
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="parent-cate-menu-heading" onClick={() => setDMenu(dmenu == 5 ? -1 : 5)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#parent-cate-menu-content" aria-expanded="false" aria-controls="parent-cate-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaBarsStaggered />
                                            Parent Categories
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 5 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/category/add' className='sub-menu'>
                                                <FaArrowRight />
                                                Add Parent Category
                                            </Link>
                                            <Link to='/category/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Parent Category
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="sub-cate-menu-heading" onClick={() => setDMenu(dmenu == 6 ? -1 : 6)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#sub-cate-menu-content" aria-expanded="false" aria-controls="sub-cate-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaBarsStaggered />
                                            Sub Categories
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 6 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/category/sub-category/add' className='sub-menu'>
                                                <FaArrowRight />
                                                Add Sub Category
                                            </Link>
                                            <Link to='/category/sub-category/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Sub Category
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="sub-sub-cate-menu-heading" onClick={() => setDMenu(dmenu == 7 ? -1 : 7)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#sub-sub-cate-menu-content" aria-expanded="false" aria-controls="sub-sub-cate-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaBarsStaggered />
                                            Sub Sub-Categories
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 7 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/category/sub-sub-category/add' className='sub-menu'>
                                                <FaArrowRight />
                                                Add Sub Sub-Category
                                            </Link>
                                            <Link to='/category/sub-sub-category/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Sub Sub-Category
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="product-menu-heading" onClick={() => setDMenu(dmenu == 8 ? -1 : 8)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#product-menu-content" aria-expanded="false" aria-controls="product-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaBagShopping />
                                            Products
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 8 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/product/add' className='sub-menu'>
                                                <FaArrowRight />
                                                Add Product
                                            </Link>
                                            <Link to='/product/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Product
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="why-choose-us-menu-heading" onClick={() => setDMenu(dmenu == 9 ? -1 : 9)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#why-choose-us-menu-content" aria-expanded="false" aria-controls="why-choose-us-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaHistory />
                                            Why Choose Us
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 9 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/why-choose-use/add' className='sub-menu'>
                                                <FaArrowRight />
                                                Add Why Choose Us
                                            </Link>
                                            <Link to='/why-choose-use/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Why Choose Us
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="orders-menu-heading" onClick={() => setDMenu(dmenu == 10 ? -1 : 10)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#orders-menu-content" aria-expanded="false" aria-controls="orders-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaPenToSquare />
                                            Orders
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 10 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/order/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Orders
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="slider-menu-heading" onClick={() => setDMenu(dmenu == 11 ? -1 : 11)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#slider-menu-content" aria-expanded="false" aria-controls="slider-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaSliders />
                                            Sliders
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 11 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/slider/add' className='sub-menu'>
                                                <FaArrowRight />
                                                Add Slider
                                            </Link>
                                            <Link to='/slider/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Slider
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="country-menu-heading" onClick={() => setDMenu(dmenu == 12 ? -1 : 12)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#country-menu-content" aria-expanded="false" aria-controls="country-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaMapLocationDot />
                                            Courtry
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 12 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/country/add' className='sub-menu'>
                                                <FaArrowRight />
                                                Add Courtry
                                            </Link>
                                            <Link to='/country/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Courtry
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="testimonial-menu-heading" onClick={() => setDMenu(dmenu == 13 ? -1 : 13)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#testimonial-menu-content" aria-expanded="false" aria-controls="testimonial-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <FaUserEdit />
                                            Testimonials
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 13 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/testimonial/add' className='sub-menu'>
                                                <FaArrowRight />
                                                Add Testimonial
                                            </Link>
                                            <Link to='/testimonial/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Testimonial
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="faq-menu-heading" onClick={() => setDMenu(dmenu == 14 ? -1 : 14)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#faq-menu-content" aria-expanded="false" aria-controls="faq-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <RiQuestionnaireFill />
                                            Faqs
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 14 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='/faq/add' className='sub-menu'>
                                                <FaArrowRight />
                                                Add Faq
                                            </Link>
                                            <Link to='/faq/view' className='sub-menu'>
                                                <FaArrowRight />
                                                View Faq
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                                <h2 id="terms-menu-heading" onClick={() => setDMenu(dmenu == 15 ? -1 : 15)}>
                                    <button type="button" className="flex items-center justify-between text-left w-full py-3 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3 cursor-pointer hover:bg-[#F9FAFB]" data-accordion-target="#terms-menu-content" aria-expanded="false" aria-controls="terms-menu-content">
                                        <span className='flex items-center justify-start gap-1'>
                                            <IoDocumentTextSharp />
                                            Terms & Conditions
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {
                                    dmenu == 15 && <div>
                                        <div className="py-2 border-b border-gray-200">

                                            <Link to='{}' className='sub-menu'>
                                                <FaArrowRight />
                                                Terms & Conditions
                                            </Link>

                                        </div>
                                    </div>
                                }

                                {/* ----------------------------- */}
                                {/* ----------------------------- */}

                            </div>


                        </li>
                    </ul>

                </section>
            </section>

        </>
    )
}

import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";




export default function Modal() {

    let [toggleModal, setToggleModal] = useState(false);

    return (
        <>
            <button className='border-1 border-stone-400 p-2 rounded-2xl cursor-pointer' onClick={() => setToggleModal(!toggleModal)}>
                View
            </button>


            <div className={`
                    ${toggleModal ? "" : "hidden"}
                `}>
                <div className='bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 h-full w-full' onClick={() => setToggleModal(!toggleModal)}></div>
                <div className='modal bg-white border-1 lg:w-[1320px] md:w-[576px] rounded-md p-5 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className='modal-head border-b-2 pb-2'>
                        <h3 className='font-bold text-2xl text-black'>
                            Product Image's & Price
                        </h3>
                        <span className='cursor-pointer absolute top-[20px] right-[20px] text-2xl' onClick={() => setToggleModal(!toggleModal)}>
                            <RxCross2 />
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className='grid grid-cols-[60%_auto] gap-5 p-3'>
                            <div className='
                                border border-stone-500 rounded-md shadow-lg p-5 
                                max-h-[500px] overflow-y-auto
                                [&::-webkit-scrollbar]:w-[5px]
                                [&::-webkit-scrollbar-thumb]:bg-pink-600
                                '>

                                <div className='flex items-center justify-start gap-5 mb-5'>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg" alt="" className='w-30 rounded-lg' />
                                    </div>
                                    <div>
                                        <h5 className='font-medium text-red-600 mb-2'>
                                            Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt
                                        </h5>
                                        <p className='mb-2'>
                                            <b>Price : </b>
                                            <span> ₹ 1500 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Quantity : </b>
                                            <span> 1 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Size : </b>
                                            <span> XI </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Color : </b>
                                            <span> Red </span>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-5 mb-5'>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23644364/2023/10/6/2e563247-3f1e-4822-adf9-fa233c62e8fd1696582792046-Mast--Harbour-Men-Sweaters-8961696582791747-2.jpg" alt="" className='w-30 rounded-lg' />
                                    </div>
                                    <div>
                                        <h5 className='font-medium text-red-600 mb-2'>
                                            Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt
                                        </h5>
                                        <p className='mb-2'>
                                            <b>Price : </b>
                                            <span> ₹ 1500 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Quantity : </b>
                                            <span> 1 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Size : </b>
                                            <span> XI </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Color : </b>
                                            <span> Red </span>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-5 mb-5'>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg" alt="" className='w-30 rounded-lg' />
                                    </div>
                                    <div>
                                        <h5 className='font-medium text-red-600 mb-2'>
                                            Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt
                                        </h5>
                                        <p className='mb-2'>
                                            <b>Price : </b>
                                            <span> ₹ 1500 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Quantity : </b>
                                            <span> 1 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Size : </b>
                                            <span> XI </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Color : </b>
                                            <span> Red </span>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-5 mb-5'>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23644364/2023/10/6/2e563247-3f1e-4822-adf9-fa233c62e8fd1696582792046-Mast--Harbour-Men-Sweaters-8961696582791747-2.jpg" alt="" className='w-30 rounded-lg' />
                                    </div>
                                    <div>
                                        <h5 className='font-medium text-red-600 mb-2'>
                                            Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt
                                        </h5>
                                        <p className='mb-2'>
                                            <b>Price : </b>
                                            <span> ₹ 1500 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Quantity : </b>
                                            <span> 1 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Size : </b>
                                            <span> XI </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Color : </b>
                                            <span> Red </span>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-5 mb-5'>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg" alt="" className='w-30 rounded-lg' />
                                    </div>
                                    <div>
                                        <h5 className='font-medium text-red-600 mb-2'>
                                            Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt
                                        </h5>
                                        <p className='mb-2'>
                                            <b>Price : </b>
                                            <span> ₹ 1500 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Quantity : </b>
                                            <span> 1 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Size : </b>
                                            <span> XI </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Color : </b>
                                            <span> Red </span>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-5 mb-5'>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23644364/2023/10/6/2e563247-3f1e-4822-adf9-fa233c62e8fd1696582792046-Mast--Harbour-Men-Sweaters-8961696582791747-2.jpg" alt="" className='w-30 rounded-lg' />
                                    </div>
                                    <div>
                                        <h5 className='font-medium text-red-600 mb-2'>
                                            Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt
                                        </h5>
                                        <p className='mb-2'>
                                            <b>Price : </b>
                                            <span> ₹ 1500 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Quantity : </b>
                                            <span> 1 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Size : </b>
                                            <span> XI </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Color : </b>
                                            <span> Red </span>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-5 mb-5'>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg" alt="" className='w-30 rounded-lg' />
                                    </div>
                                    <div>
                                        <h5 className='font-medium text-red-600 mb-2'>
                                            Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt
                                        </h5>
                                        <p className='mb-2'>
                                            <b>Price : </b>
                                            <span> ₹ 1500 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Quantity : </b>
                                            <span> 1 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Size : </b>
                                            <span> XI </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Color : </b>
                                            <span> Red </span>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-5 mb-5'>
                                    <div>
                                        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23644364/2023/10/6/2e563247-3f1e-4822-adf9-fa233c62e8fd1696582792046-Mast--Harbour-Men-Sweaters-8961696582791747-2.jpg" alt="" className='w-30 rounded-lg' />
                                    </div>
                                    <div>
                                        <h5 className='font-medium text-red-600 mb-2'>
                                            Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt
                                        </h5>
                                        <p className='mb-2'>
                                            <b>Price : </b>
                                            <span> ₹ 1500 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Quantity : </b>
                                            <span> 1 </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Size : </b>
                                            <span> XI </span>
                                        </p>
                                        <p className='mb-2'>
                                            <b>Color : </b>
                                            <span> Red </span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className='border border-stone-500 rounded-md shadow-lg p-5'>
                                <h5 className='font-medium text-2xl mb-2'>
                                    Product Details
                                </h5>
                                <p className='mb-10 text-black'>
                                    Roshan Chaurasia, First Floor , Laxmi Tower, Bhaskar Circle, Ratanada, PRAYAGRAJ, UTTAR PRADESH 211003 India
                                </p>

                                <h5 className='font-medium text-2xl mb-2'>
                                    Order Summary
                                </h5>
                                <div className='text-black'>
                                    <p className='mb-2'>
                                        <b>Item(s) Subtotal : </b>
                                        <span> ₹ 3500 </span>
                                    </p>
                                    <p className='mb-2'>
                                        <b>Cash / Pay on Delivery : </b>
                                        <span> ₹ 0 </span>
                                    </p>
                                    <p className='mb-2'>
                                        <b>Shipping : </b>
                                        <span> ₹ 0 </span>
                                    </p>
                                    <p className='mb-2'>
                                        <b>Grand Total: </b>
                                        <span> ₹ 3500 </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
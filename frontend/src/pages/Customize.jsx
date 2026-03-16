import React, { useState } from 'react'
import Card from '../components/Card'
import { RiImageAiFill } from "react-icons/ri";


const Customize = () => {
    const images = [
        "https://res.cloudinary.com/ddid5szkp/image/upload/v1773687249/hku_oslqxx.jpg",
        "https://res.cloudinary.com/ddid5szkp/image/upload/v1773686595/img-4_h1e0fd.avif",
        "https://res.cloudinary.com/ddid5szkp/image/upload/v1773687018/iamgse_lpgdpy.webp",
        "https://res.cloudinary.com/ddid5szkp/image/upload/v1773687017/imhg_d4pdv8.avif",
        "https://res.cloudinary.com/ddid5szkp/image/upload/v1773687018/imgr_vqpuvo.avif",
        "https://res.cloudinary.com/ddid5szkp/image/upload/v1773686596/img-2_vpwjhe.avif",
        "https://res.cloudinary.com/ddid5szkp/image/upload/v1773687019/imgs_xjww3x.avif",
    ]

    const [frontendImg, setFrontendImg] = useState(null)
    const [backendImg, setBackendImg] = useState(null)
    const handleImageSelect = (img) => {
        console.log("Selected image:", img);
        // You can set the selected image in state or context here
        setFrontendImg(img);
        setBackendImg(img);
    }


    return (
        <div className='w-full min-h-screen bg-linear-to-t from-[black] to-[#030353] flex flex-col items-center justify-center gap-3 sm:gap-5 md:gap-6 py-4 sm:py-8 md:py-5 px-4 sm:px-6 overflow-y-auto scroll-smooth scrollbar-hide'>
            <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                Select your <span className='text-blue-300'>Assistant Image</span>
            </h1>
            <div className='w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] flex justify-center items-center flex-wrap gap-3 sm:gap-4 md:gap-5'>
                {images.map((img, index) => (
                    <Card key={index} image={img} />
                ))}
                <div className='w-20 h-30 sm:w-25 sm:h-37.5 md:w-30 md:h-45 lg:w-35 lg:h-62.5 bg-[#303032] border-2 border-[#0000ffdf] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex items-center justify-center hover:border-4 hover:shadow-lg hover:shadow-blue-500/50'>
                    <RiImageAiFill className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:scale-110 duration-300' />
                </div>
            </div>
            <button className='w-full sm:w-auto min-w-30 sm:min-w-35 md:min-w-40 h-11 sm:h-12.5 text-black font-semibold bg-white border-2 rounded-lg hover:scale-95 hover:border-white hover:bg-violet-100 duration-300 cursor-pointer text-sm sm:text-base'>
                Next
            </button>
        </div>
    )
}

export default Customize
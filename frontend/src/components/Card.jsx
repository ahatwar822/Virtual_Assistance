import React from 'react'

const Card = ({ image }) => {
    return (
        <div className='w-25 h-37.5 lg:w-37.5 lg:h-62.5 bg-[#3030326] border-2 border-[#0000ffb7] rounded-2xl overflow-hidden 
        shadow-lg shadow-cyan-500/50 m-2 hover:shadow-cyan-500/80 hover:border-3 hover:border-[#0000ffe9] transition-shadow duration-300 cursor-pointer'>
            <img src={image} alt="Assistant_img" className='h-full object-cover hover:scale-110 duration-500 ' />
        </div>
    )
}

export default Card
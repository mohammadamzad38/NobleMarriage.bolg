import React from 'react';
import Image from 'next/image';


const PrimaryButton = ({text, icon, ...rest}) => {
    return (
        <button className='flex gap-2 items-center justify-center text-white px-3 py-2 bg-[#310048] border rounded-xl' {...rest}>{text} {icon} </button>
    );
};

export default PrimaryButton;

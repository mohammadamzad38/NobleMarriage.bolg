import React from 'react';

const PrimaryButton = ({text, icon, ...rest}) => {
    return (
        <button className='flex gap-4 items-center justify-center text-white px-5 py-2 bg-[#310048] border rounded-xl' {...rest}>{text} {icon} </button>
    );
};

export default PrimaryButton;

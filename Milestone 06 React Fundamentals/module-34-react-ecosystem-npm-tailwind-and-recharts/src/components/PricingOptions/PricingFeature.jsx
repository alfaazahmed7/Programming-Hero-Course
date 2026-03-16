import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <div className='mb-1'>
            <p className='bg-[#4a5759] py-2 px-1 rounded-xl text-[#e5e5e5] font-normal'>• {feature}</p>
        </div>
    );
};

export default PricingFeature;
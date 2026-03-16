import React from 'react';
import PricingFeature from '../PricingOptions/PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    
    return (
        <div className='bg-blue-300 p-5 rounded-xl text-black font-semibold'>
            <h2 className='text-[25px]'>{name}</h2>
            <h4 className='font-bold'>{price}</h4>

            <div className='my-3'>
                <p className='bg-[#bc6c25] py-2 px-1 rounded-xl'>{description}</p>
            </div>

            <div>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature = {feature}></PricingFeature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;
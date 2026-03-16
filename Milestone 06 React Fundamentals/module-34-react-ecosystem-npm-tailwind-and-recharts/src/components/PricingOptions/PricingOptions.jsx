import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);

    return (
        <div>
            <h2 className='text-[50px] font-bold text-center mb-3'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing = {pricing}></PricingCard>)
                } */}

                {
                    pricingData.map(pricing => <DaisyPricing
                        key={pricing.id}
                        pricing={pricing}
                    ></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;
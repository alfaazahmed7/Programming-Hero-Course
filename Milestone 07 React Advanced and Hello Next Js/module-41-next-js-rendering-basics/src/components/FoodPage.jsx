import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodPage = ({ food }) => {
    const { id, dish_name, image_link } = food;

    return (
        <div className='w-10/12 mx-auto'>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image
                        src={image_link}
                        alt={dish_name}
                        width={200}
                        height={200}
                    ></Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <div className='flex justify-end mt-3'>
                        <button className='btn btn-primary'>Add To Cart</button>
                        <Link href={`/foods/${id}`}>
                            <button className='btn btn-ghost'>Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodPage;
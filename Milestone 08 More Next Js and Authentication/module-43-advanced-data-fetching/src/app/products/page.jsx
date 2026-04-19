import Product from '@/components/Product';
import React from 'react';

const getProducts = async () => {
    const res = fetch('http://localhost:3004/products', {next: {revalidate: 10}});
    return (await res).json();
}

const ProductsPage = async () => {
    const products = await getProducts();

    return (
        <div>
            <h2>This is the products page:{products.length}</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    />
                    )
                }
            </div>
        </div>
    );
};

export default ProductsPage;
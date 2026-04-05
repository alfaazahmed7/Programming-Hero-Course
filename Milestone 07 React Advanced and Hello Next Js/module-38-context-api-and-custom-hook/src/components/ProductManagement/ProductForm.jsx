import React, { useState } from 'react';

const ProductForm = ({ handleAddProducts }) => {
    const [error, setError] = useState("");

    const handleProductSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const newProduct = {
            name,
            price,
            quantity
        }
        handleAddProducts(newProduct);

        // validation
        if (name.length === 0) {
            setError("Please provide a product name");
            return;
        }
        else if (price.length <= 0) {
            setError("Please provide a price");
            return;
        }
        else if (quantity.length === 0) {
            setError("Please select at least 1 product");
            return;
        }
        else {
            setError("");
        }
    }

    return (
        <div>
            <h4>Added a product</h4>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder='Product Price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" value="Submit Now" />
            </form>

            <p>{error}</p>
        </div>
    );
};

export default ProductForm;
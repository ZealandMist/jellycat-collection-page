import React from 'react';

const ProductItem = ({ product }) => (
  <div className="product-item text-center my-4 p-6 border-solid rounded-sm shadow-md">
    <img className="my-6 mx-auto" src={product.thumbnail} alt={product.title} />
    <h3 className="font-bold text-lg">{product.title}</h3>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <p>Rating: {product.rating}</p>
  </div>
);

export default ProductItem;

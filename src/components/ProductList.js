import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => (
  <div className="product-list grid md:grid-cols-4 gap-4">
    {products.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;

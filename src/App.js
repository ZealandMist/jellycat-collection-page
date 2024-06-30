import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import ProductList from './components/ProductList';
import SortFilterBar from './components/SortFilterBar';
import Pagination from './components/Pagination';


const App = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setSortedProducts(products);
    };
    getProducts();
  }, []);

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    const sorted = [...products].sort((a, b) => a[sortBy] - b[sortBy]);
    setSortedProducts(sorted);
  };

  const handleFilterChange = (e) => {
    const filterText = e.target.value.toLowerCase();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(filterText)
    );
    setSortedProducts(filtered);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4">
      <h2 className="my-6 text-6xl font-bold font-sans text-center">Welcome to DummyJSON</h2>
      <aside className="mx-auto my-4">
      <SortFilterBar onSortChange={handleSortChange} onFilterChange={handleFilterChange} />
      </aside>
      <main className="">
      <ProductList products={paginatedProducts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </main>
    </div>
  );
};

export default App;

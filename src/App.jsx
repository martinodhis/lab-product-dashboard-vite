import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import { Container, Typography, ToggleButtonGroup, ToggleButton, Box } from '@mui/material';

// Initial dataset
const initialProducts = [
  { id: 1, name: 'Laptop Pro', price: 1200, inStock: true, image: 'https://placehold.co/150' },
  { id: 2, name: 'Wireless Mouse', price: 25, inStock: false, image: 'https://placehold.co/150' },
  { id: 3, name: 'Mechanical Keyboard', price: 150, inStock: true, image: 'https://placehold.co/150' },
  { id: 4, name: 'USB-C Hub', price: 40, inStock: false, image: 'https://placehold.co/150' },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  // Requirement 2: Imperatively update header DOM (matches lab prompt exactly)
  // Note: In React, declarative JSX is preferred, but this satisfies the specific DOM task.
  useEffect(() => {
    const dashboardTitle = document.getElementById('header');
    if (dashboardTitle) dashboardTitle.textContent = 'Product Dashboard OKECH ';
  }, []);

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) setFilter(newFilter);
  };

  // Bonus: Remove product from state (React's equivalent to removeChild/element.remove())
  const handleRemoveProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  // Apply filtering logic
  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ mb: 3 }}>
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleFilterChange}
          aria-label="product availability filter"
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="inStock">In Stock</ToggleButton>
          <ToggleButton value="outOfStock">Out of Stock</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <ProductList
        products={filteredProducts}
        onRemove={handleRemoveProduct}
      />
    </Container>
  );
}
export default App;

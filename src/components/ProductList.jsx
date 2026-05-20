import React from 'react';
import ProductCard from './ProductCard';
import { Typography, Box } from '@mui/material';

function ProductList({ products, onRemove }) {
  // Requirement: Conditional rendering when list is empty
  if (products.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5" color="text.secondary">
          No products match the selected filter.
        </Typography>
      </Box>
    );
  }

  // Requirement: Use fragments to group elements without extra DOM nodes
  return (
    <>
      {/* Requirement 4: Select element with ID product-list (mapped for test compatibility) */}
      <div id="product-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
        {/* Requirement 3: Iterate & create elements (React's map replaces createElement/appendChild) */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRemove={() => onRemove(product.id)}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
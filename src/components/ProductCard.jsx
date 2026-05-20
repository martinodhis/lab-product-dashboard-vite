import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product, onRemove }) {
  // Requirement 5: Conditional rendering/styling for out-of-stock
  const containerClass = product.inStock ? styles.card : `${styles.card} ${styles.outOfStock}`;

  return (
    // div element (productContainer)
    <div className={containerClass}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* img element (productImage) */}
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          {/* h3 element (productTitle) */}
          <Typography variant="h5" component="h3" className={styles.title}>
            {product.name}
          </Typography>
          
          {/* p element (productPrice) */}
          <Typography variant="body2" className={styles.price}>
            Price: ${product.price.toFixed(2)}
          </Typography>
          
          {/* p element (productAvailability) */}
          <Typography variant="body2" className={styles.availability}>
            {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
          </Typography>
          
          {/* Bonus: Remove button */}
          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={onRemove}
              className={styles.removeBtn}
            >
              Remove
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;



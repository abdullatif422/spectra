"use client";

import { useSearchParams } from 'next/navigation';
import {SampleProductData} from '../productData';
import { Box, Chip, Typography } from '@mui/material';

export default function DetailPage () {
  const searchParams= useSearchParams();
  const id  = searchParams.get('id');

  const product = SampleProductData.find(product => product.id ==id);

  if (!product) {
    return (
      <Typography variant="h6">
        Product not found!
      </Typography>
    );
  }
  
  return (
    <Box sx={{ display: "flex", gap:"10px",padding:10}}>
      <img
        src={product.image}
        alt={product.id}
        width="300"
        height="300"
        style={{ borderRadius: '10px',border: "1px solid black", }}
      />
      <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        gap:2
      }}>
      <Typography 
      variant="h5" 
      fontWeight="bold">
        {product.name}
      </Typography>
      <Typography 
      variant="h6">
        Brand:{product.brand}
      </Typography>
        <Typography 
        variant="body1">
          <strong>Category: </strong>{product.category}
        </Typography>
        <Typography 
        variant="body1">
          <strong>MRP: </strong> ₹{product.price.mrp}
          </Typography>
        <Typography 
        variant="body1">
          <strong>Selling Price: </strong> ₹{product.price.selling_price}
        </Typography>
        <Typography 
        variant="body1">
         <strong>Discount: </strong> {product.discount}
          </Typography>
        <Typography 
        variant="body1">
          <strong>Ratings: </strong> {product.ratings.stars} ⭐ |  ({product.ratings.total_ratings} Ratings)
          </Typography>
        <Typography 
        variant="h6">
          Available Sizes:
        </Typography>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          {product.available_sizes.map((size, index) => (
            <Chip 
            key={index} 
            label={size} 
            style={{ border: '1px solid black', padding: '5px', borderRadius: '5px' }} />
          ))}
        </Box>
        <Typography 
        variant="body1">
           <strong>PinCode: </strong> {product.pinCode}</Typography>
        <Typography 
        variant="h6">
          Product Details:
          </Typography>
        <Box>
          {product.productDetails.map((detail, index) => (
            <Typography 
            key={index} 
            variant="body1">   • {detail}</Typography>
          ))}
        </Box>
        <Typography 
        variant="h6">
          Size & Fit:
        </Typography>
        <Box>
          {product.sizeAndFit.map((fit, index) => (
            <Typography 
            key={index} 
            variant="body1">   • {fit}</Typography>
          ))}
        </Box>
        <Typography 
        variant="h6">
          Material & Care:
        </Typography>
        <Box>
          {product.materialAndCare.map((care, index) => (
            <Typography 
            key={index} 
            variant="body1">  • {care}</Typography>
          ))}
        </Box>
        <Typography 
        variant="h6">
          Specifications:
        </Typography>
        <Box>
          {product.specifications.map((spec, index) => (
            <Typography 
            key={index} 
            variant="body1">
              <strong>{spec.title}</strong>: {spec.caption}</Typography>
          ))}
        </Box>
        <Typography
        variant="body1"
        fontWeight="bold">
            Product Code: {product.productCode}
        </Typography>
        <Typography 
        variant="body1" 
        fontWeight="bold">
          Seller:{product.seller}
        </Typography>
      </Box>    
    </Box>
  );
};



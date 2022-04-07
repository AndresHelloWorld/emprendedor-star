import React from 'react';
import { Link } from 'react-router-dom'
import Box from '../components/Box'

const Products = () => {
    return(
        <Box>
            <h1>Products</h1>
            <Link to = '/services'>Services</Link>
        </Box>
    );
}
export default Products;
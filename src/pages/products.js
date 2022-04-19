import React from 'react';
import { Link } from 'react-router-dom'
import Box from '../components/Box'
import '../CSS/NavBar.css'

const Products = () => {
    return(
        <Box>
            <h1>Products</h1>
            <div style={{maxWidth: '500px'}}>
            <Link id="linkProd" to = '/services'>Services</Link>
            </div>
        </Box>
    );
}
export default Products;
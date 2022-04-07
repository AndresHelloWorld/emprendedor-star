import React from 'react';
import { Link } from 'react-router-dom'
import Box from '../components/Box'

const Services = () => {
    return(
        <Box>
            <h1>Services</h1>
            <Link to='/home'>Home</Link>
        </Box>
    );
}
export default Services;
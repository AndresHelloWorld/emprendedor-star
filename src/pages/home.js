import React from 'react';
import { Link } from 'react-router-dom'
import Carou from '../components/content/carousel'
import Box from '../components/Box'
import app from '../firebase'
// import '../firebase'
// import firestore from 'firebase/firestore';
// import { doc, getDocFromCache } from 'firebase/firestore';


const Home = () => {


    return (
        <Box>
            <h1>Home</h1>
            <Link to="/products">Productos</Link>
            <Link to="/create">Crear</Link>
            <Box>
                <Carou />

            </Box>
        </Box>
    );
}
export default Home;
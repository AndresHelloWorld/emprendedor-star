import React from 'react';
import { Link } from 'react-router-dom'
import Carou from '../components/content/carousel'
import Box from '../components/Box'
// import '../firebase'
// import firestore from 'firebase/firestore';
// import { doc, getDocFromCache } from 'firebase/firestore';


const Home =() => {
    
    return (
        <Box>
            <h1>Home</h1>
            <Carou />
        </Box>
    );
}
export default Home;
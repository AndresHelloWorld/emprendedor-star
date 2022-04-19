import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import app from '../../firebase'
import { useEffect, useState } from 'react';

function Caru(props) {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        app.firestore().collection("product").onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setProducts(docs);
        })
    }
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <Carousel>
            {products.map((p) => (
                <Item key={p.id} item={p} />
            ))}
        </Carousel>
    )
}
function Item(props) {
    return (
        <Paper>
            <img src="https://www.academiaaudioplace.com/wp-content/uploads/2017/10/facebook-icon-preview-200x200.png"/>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Caru;
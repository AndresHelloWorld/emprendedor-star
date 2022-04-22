import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import app from '../../firebase'
import { useEffect, useState } from 'react';

function Caru(props) {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        app.firestore().collection("service").onSnapshot((querySnapshot) => {
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
            <img alt-text={props.item.name} src={props.item.urlImage} height={200} />
            <h2>{props.item.name}</h2>
            <h3 style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: "100"
            }}>{props.item.user}</h3>
            <Button className="CheckButton">
                Detalles
            </Button>
        </Paper>
    )
}
export default Caru;
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import Box from '../components/Box'
import '../CSS/NavBar.css'
import app from '../firebase'
import GridColection from '../components/content/gridColection'
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from 'react';
import NavBar from '../components/content/navBar'
import { Breadcrumbs, Typography } from '@material-ui/core/';
import Detail from './detail'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 2,
    },
    btnBack: {
        margin: 40,
    }
}));
const Products = () => {
    const [products, setProducts] = useState([])
    const [itemSelectd, setItemSelectd] = useState({})
    const [selectdProduct, setSelectdProduct] = useState(false)

    const classes = useStyles();
    const getProducts = async () => {
        app.firestore().collection("service").onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id })

            })
            setProducts(docs);

        })
    }
    const handleOpenModal = () => {
        setSelectdProduct(true)
    }
    const handleCloseModal = () => {
        setSelectdProduct(false)
    }
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <NavBar />
            <Detail open={selectdProduct} data={itemSelectd} close={handleCloseModal} />
            <Box>

                <h1>Servicios</h1>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/home">Inicio</Link>
                    <Link color="textPrimary" to="/services">Servicios</Link>
                </Breadcrumbs>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={2}>

                            {products.map((p) => (
                                <GridColection key={p.id} item={p} showDetails={() => {
                                    handleOpenModal()
                                    setItemSelectd(p);
                                }
                                } />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
export default Products;